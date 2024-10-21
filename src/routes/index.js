import express from "express";
const app = express();
import userRoutes from "./userRoute.js";
import recipeRoutes from "./recipeRoute.js";



app.use("/user", userRoutes);
app.use("/recipe", recipeRoutes);




export default app;
