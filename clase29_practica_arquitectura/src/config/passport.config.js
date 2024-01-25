import passport from 'passport'
import passportJWT from 'passport-jwt'
import GithubStrategy from 'passport-github2'
import UserModel from '../models/user.model.js'
import { generateToken } from '../utils.js'

const JWTStrategy = passportJWT.Strategy

const initializePassport = () => {

    passport.use('github', new GithubStrategy({
        clientID: 'Iv1.c7f09c63a366903d',
        ClientSecret: 'fb2fdcf5115d63e7ae3299715496c24d7eaca13b',
        callbackURL: 'http://localhost:8080/githubcallback'
    }, async (accessToken, refreshToken, profile, done) => {
        console.log(profile)

        try {
            const email = profile._json.email
            let user = await UserModel.findOne({ email })
            if(!user) {
                console.log('User doesn\'t exist. Pass to register...')

                user = {
                    name: profile._json.name,
                    email,
                    password: '',
                    role: 'user',
                    social: 'github'
                }
                const result = await UserModel.create(user)
                console.log('User registered succefully 👌')

                user._id = result._id
            }

            const token = generateToken(user)
            user.token = token

            return done(null, user)
        } catch (error) {
            console.error(error);
            return done('[GITHUB] ' + error)
        }
    }))

    passport.use('jwt', new JWTStrategy({
        jwtFromRequest: passportJWT.ExtractJwt.fromExtractors([req => req?.cookies?.cookieJWT ?? null]),
        secretOrKey: 'secretForJWT'
    }, (jwt_payload, done) => {
        done(null, jwt_payload)
    }))

    passport.serializeUser((user, done) => {
        done(null, user._id)
    })
    passport.deserializeUser(async (id, done) => {
        const user = await UserModel.findById(id)
        done(null, user)
    })
}

export default initializePassport
