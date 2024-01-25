import EErrors from "./enums.js"
import { generateUserErrorInfo } from "./info.js"

export default class CustomError {

    static createError({ name = 'Error', cause, message, code }) {
        const error = new Error(message, { cause })
        error.name = name
        error.code = code

        throw error
    }

    static createUser(user) {
        CustomError.createError({
            name: 'User creation error',
            cause: generateUserErrorInfo(user),
            message: 'Error trying to create user',
            code: EErrors.INVALID_TYPES_ERROR
        })
    }

}