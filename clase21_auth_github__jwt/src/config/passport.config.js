import passport from 'passport'
import UserModel from '../models/user.model.js'
import GitHubStrategy from 'passport-github2'

const initializePassport = () => {

    passport.use('github', new GitHubStrategy({
        clientID: 'Iv1.f16ee1054cef2024',
        clientSecret: 'a3a49a21d0f704a23dae5a0591cbf393b36cefd5',
        callbackURL: 'http://127.0.0.1:8080/githubcallback'
    }, async (accessToken, refreshToken, profile, done) => {
        console.log(profile);

        try {
            const user = await UserModel.findOne({ email: profile._json.email })
            if(user) {
                console.log('Ya se encuentra registrado')
                return done(null, user)
            }

            const newUser = await UserModel.create({
                first_name: profile._json.name, 
                last_name: '',
                email: profile._json.email,
                password: ''
            })

            return done(null, newUser)

        } catch (error) {
            return done('Error to login with github ' + error)
        }
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