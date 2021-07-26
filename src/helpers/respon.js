const response = {
    success: (res, data, message) => {
        const response = {
            succes: true,
            data: data,
            code: 200,
            message: message
        }
        res.json(response)
    },
    failed: (res, code,err) => {
        if(code === 500){
            const response =  {
                succes: false,
                data: null,
                code: code,
                message: 'internal server error' + err
            }
            res.json(response)
        } else if(code === 401){
            const response =  {
                succes: false,
                data: null,
                code: code,
                message: 'not found'
            }
        }
        
    }
}

module.exports = response