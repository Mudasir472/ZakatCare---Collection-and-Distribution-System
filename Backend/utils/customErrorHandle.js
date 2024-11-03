// const errorHandle = (err, req, res, next) => {
//     const status = err.status || 500
//     const message = err.message
//     return res.status(status).json({ message })
// }
// module.exports = errorHand
class ExpressError extends Error{
    constructor(status,message,success){
        super();
        this.status = status;
        this.success = false;
        this.message = message;
    }
} 

module.exports = ExpressError;