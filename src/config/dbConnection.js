import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("db Connected ");
  } catch (error) {
    throw error;
  }
};

export default dbConnect;
