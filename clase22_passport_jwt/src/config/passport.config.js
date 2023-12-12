import passport from 'passport'
import passportJWT from 'passport-jwt'

const JWTStrategy = passportJWT.Strategy

const cookieExtractor = req => {
    const token = (req?.cookies) ? req.cookies['coderCookie'] : null

    console.log('COOKIE EXTRACTOR: ', token)
    return token
}

const initializePassport = () => {
    passport.use('jwt', new JWTStrategy({
        secretOrKey: 'coderTokenForJWT',
        jwtFromRequest: passportJWT.ExtractJwt.fromExtractors([cookieExtractor])
    }, (jwt_payload, done) => {
        return done(null, jwt_payload)
    }))

}

export default initializePassport