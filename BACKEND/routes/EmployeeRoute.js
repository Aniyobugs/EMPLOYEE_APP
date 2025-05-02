var express = require('express');
var router = express.Router();
var eModel = require('../model/employee');

// api to add employee details
router.post('/',async(req,res)=>{
    try {
        console.log("h")
        console.log(req.body)
        const{fname,dname,lname,sname}=req.body;
       const newEmployee = new eModel({
        fname,
        dname,
        lname,
        sname
       })
       await newEmployee.save()
       res.status(200).send({message:"Employee added successfully",Employee:newEmployee})
    } catch (error) {
        res.status(500).send({message:"Internal server error"})
    }
})
router.get('/',async(req,res)=>{
    try {
        const Employee = await eModel.find();
        res.status(200).json(Employee);
        console.log(Employee)
    } catch (error) {
        console.log(error)
    }
    }
)
// router.put('/:id',upload.single("image",async (req, res) => {
//     try {
//         const id = req.params
//         const {pname,price,stock,description} = req.body
//         const updatePro = {
// pname,
// price,
// stock,
// description
//         }
//   if(req.file)     
//     } catch (error) {
//         res.send(error)
//     }
// }));
// router.put('/:id',upload.single("image"),async(req,res)=>{
//     try {
//         const id = req.params.id
//         const {pname,price,stock,description} = req.body
//         const updatePro = {
//         pname,
//         price,
//         stock,
//         dscription
//         }
//         if(req.file){
//             // if new image is uploaded while udating the product give the path
//             updatePro.images = [req.file.filename];
//         }
//         const product = await pModel.findByIdAndUpdate(id,updatePro);
//         if(!product){
//             return res.status(404).send({message:"Product not found"})    
//         }
//         res.status(200).send({message:"Product updated successfully"})
//     } catch (error) {
//         res.status(500).send({message:"Internal server error"})
        
//     }
// })

router.put('/:id',async(req,res)=>{
    console.log("h");

    try {
        const {id} = req.params;

        const {fname,dname,lname,sname} = req.body
        const updateEmployee = {
            fname,
            dname,
            lname,
            sname,

        }	
         const Employee = await eModel.findByIdAndUpdate(id,updateEmployee);
         if(!Employee){
           return  res.status(404).send({message:"Employee not found"})
         }
        res.status(200).send({message:"Employee updated successfully"})
    } catch (error) {
        console.log(error)
    }
    }
)

router.delete('/:id',async(req,res)=>{
    try {
        var id =req.params.id
        await eModel.findByIdAndDelete(id)
        res.status(200).send({message:"Employee deleted successfully"})
    } catch (error) {
        res.status(500).send({message:"Internal server error"})
        
    }
})


module.exports= router
