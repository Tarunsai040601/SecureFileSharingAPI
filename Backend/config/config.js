const mongoose=require('mongoose')
const dotenv=require('dotenv').config()

const connectionData=async()=>{
    try {
        const data=await mongoose.connect(process.env.dataUrl,{dbName:process.env.dbName})
        console.log(`database connected sucessfully`)
    } catch (error) {
        console.log(`database connectivety issue`)
    }

}
module.exports=connectionData;