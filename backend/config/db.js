import mongoose from "mongoose";

 export const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://prerna09:232722@cluster0.d4sgayv.mongodb.net/restaurantapp").then(()=> console.log("DB Connected"));
}