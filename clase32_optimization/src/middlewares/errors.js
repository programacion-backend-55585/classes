import EErrors from "../errors/enums.js";

export default (error, req, res, next) => {
    console.error(error)

    switch (error.code) {
        case EErrors.INVALID_TYPES_ERROR:
            return res.status(400).send({
                status: 'error',
                error: error.name,
                cause: error.cause
            })
            break;
    
        default:
            res.status(500).send({
                status: 'error',
                error: 'Undandled error'
            })
            break;
    }
}