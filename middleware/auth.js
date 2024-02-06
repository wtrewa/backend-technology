const blackList = require("../blackList")

const auth = async(req,res,next)=>{
     try {
        const token = await  req.headers.authorization.split(' ')[1]
        if(!token){
           return  res.send("token is not found")
        }
        const index =  blackList.findIndex(el=>el==token)
        console.log(`index:`,index)
        if(index!==-1){
            return res.send("please login again!").status(404)
        }
        next()
     } catch (error) {
        res.send(error.message)
     }
}

module.exports = auth;