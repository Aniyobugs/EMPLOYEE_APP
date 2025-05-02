var mongoose=require("mongoose")
var eSchema=mongoose.Schema({
    fname:String,
    dname:String,
    lname:String,
    sname:Number,
    role:{type:String,enum:["admin","user"],default:"user"}
})
var eModel=mongoose.model("admin",eSchema)
module.exports=eModel;