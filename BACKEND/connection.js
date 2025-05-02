var mongoose = require("mongoose")
mongoose.connect(process.env.mongodb_url)
.then(()=>{
    console.log("CONNECTED TO DB")
})
.catch((error)=>{
    console.log(error)
})
