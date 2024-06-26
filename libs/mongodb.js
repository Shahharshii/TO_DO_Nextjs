import mongoose from "mongoose";

export default async function 
mongoDBConnect(){
   try {
     await mongoose.connect(process.env.MONGODB_URI);
     console.log("connection successfull")
    
   } catch (error) {
    console.log(error)
   }
}