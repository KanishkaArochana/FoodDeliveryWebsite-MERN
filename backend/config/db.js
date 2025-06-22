import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://root:root1234@cluster0.cvfrifz.mongodb.net/food-del').then(()=>console.log("DB Connected"));

}

