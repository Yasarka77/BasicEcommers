const user = require('../models/user')
const bcryptsjs = require('bcryptjs')

const Login = async(req,res)=>{
   const body = req.body //data input

   const findUser = await user.findOne({email:body.email})// checking if user in database
   //comparing the hashpassword with raw password which user is sendn in  body password
   const comparePassword = await bcryptsjs.compare(body.password, findUser.password)
  res.send({message:'success',data: findUser})  //sending back the user to react
   if(!comparePassword){
    return res.status(401).json({errorMessage: 'Invalid Password'})
   }
   res.send({message:'sucess',data: findUser})

}

const Register = async(req,res)=>{
  //data which we getting from user in req.body
   const body = req.body
   //hashing the password
    const hashpassword = await bcryptsjs.hash(body.password, 10)
    const saveData = await user.create({ 

        username: body.username,
        email: body.email,
        //saving the hashed password
        password: hashpassword
       })//save in mongo database

       res.send({message:'success',data: saveData}) //sending back the user data to react
}


module.exports = {
    Login,Register
}


