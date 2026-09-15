//help send http response with specific structure
//3 parameters - response (provided by express.js), status(http status code), result (data to be sent into response)

const response = (res, status, result = '') => {
    let desc = ''

    switch (status) {
        case 200:
            desc = 'Ok'
            break
        case 201:
            desc = 'Created'
            break
        case 400:
            desc = 'Bad Request'
            break
        case 401:
            desc = 'Unauthorized'
            break
        case 404:
            desc = 'Not Found'
            break
        case 500:
            desc = 'Internal Server Error'
            break
        default:
            desc = ''
    }

    //helper function
    const isObject = (data) => {
        return !!data && data.constructor === Object
    }

    const results = {
        status: status,
        description: desc,
        result: isObject(result) ? [result] : result //array is result is an object
    }

    res.status(status).json(results)
}

module.exports = response