import mongoose from "mongoose";

export const connectDB = async () => {
  const { connection } = await mongoose.connect(process.env.MONGO_URI);
  console.log(`MongoDB connected with ${connection.host}`);
};

//MONGO_URI=mongodb+srv://ayushkumar:6KBAbjYM0Xk5WCmf@cluster0.fcznjtu.mongodb.net/CourseFair?retryWrites=true
//mongodb://127.0.0.1:27017/CourseFair
