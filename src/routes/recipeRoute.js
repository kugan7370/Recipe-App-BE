import recipeController from "../controllers/recipeController.js";
import express from "express";
import verifyUserToken from "../middleware/verifyUserToken.js";


const router = express.Router();

router.get("/getAllCategories", recipeController.getCategoryController);

router.get("/getRecipeByCategory/:category", recipeController.getRecipeByCategoryController);

router.get("/getRecipeById/:id", recipeController.getRecipeByIdController);

router.put("/addFavoriteRecipe/:recipeId", verifyUserToken, recipeController.addFavoriteRecipeController);

router.put("/removeFavoriteRecipe/:recipeId", verifyUserToken, recipeController.removeFavoriteRecipeController);

router.get("/getFavoriteRecipes", verifyUserToken, recipeController.getFavoriteRecipesController);


export default router;
