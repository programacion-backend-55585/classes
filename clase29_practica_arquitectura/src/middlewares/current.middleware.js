
const current = (roles) => {
    return (req, res, next) => {

        if(req.user.role in roles) {
            next()
        }

        res.status(400).send('No authorized')


    }
}