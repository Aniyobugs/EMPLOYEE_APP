var express=require("express")
var router =express.Router();
var userModel=require('../model/user')


//signup api
router.post("/",(req,res)=>{
  try {
    userModel(req.body).save()
    res.status(200).send({message:"User added successfully"})
  } catch (error) {
    res.status(500).send({message:"Something went wrong"})
  }  
})

//api for loginnn
router.post('/login',async(req,res)=>{
    try {
        const user=await userModel.findOne({ename:req.body.ename})
        if(!user){
            return res.send({message:"user not found"})
        }
        if(user.password === req.body.password){
            return res.status(200).send({message:`Welcome ${user.role}`,user})
        }
        return res.send({message:"Invalid password"})
    } catch (error) {
      res.status(500).send({message:"Something Went Wrongg"})  
    }
})
router.delete("/:id",async(req,res)=>{
  try {
    var id =req.params.id
    await userModel.findByIdAndDelete(id)
  } catch (error) {
    
  }
})
module.exports=router;