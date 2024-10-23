import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect('mongodb+srv://kugan18:admin@e-commerce.cwpok.mongodb.net/recipe-app-codeSec?retryWrites=true&w=majority');
    console.log("db Connected ");
  } catch (error) {
    throw error;
  }
};

export default dbConnect;
