import { addFavoriteRecipe, getCategories, getFavoriteRecipes, getRecipeById, getRecipesByCategory, removeFavoriteRecipe } from "../services/recipeService.js";
import CustomError from "../utils/customError.js";
import { successResponse, errorResponse } from "../utils/response.js";

const getCategoryController = async (req, res) => {
  try {
    const categories = await getCategories();
    successResponse(res, categories, "Categories retrieved successfully");
  } catch (error) {
    if (error instanceof CustomError) {
      errorResponse(res, error.message, error.message, error.statusCode);
    } else {
      errorResponse(res, error.message, "Failed to retrieve categories");
    }
  }
};

const getRecipeByCategoryController = async (req, res) => {
  try {
    const recipes = await getRecipesByCategory(req.params.category);
    successResponse(res, recipes, "Recipes retrieved successfully");
  } catch (error) {
    if (error instanceof CustomError) {
      errorResponse(res, error.message, error.message, error.statusCode);
    } else {
      errorResponse(res, error.message, "Failed to retrieve recipes");
    }
  }
}

const getRecipeByIdController = async (req, res) => {
  try {
    const recipe = await getRecipeById(req.params.id);
    successResponse(res, recipe, "Recipe retrieved successfully");
  } catch (error) {
    if (error instanceof CustomError) {
      errorResponse(res, error.message, error.message, error.statusCode);
    } else {
      errorResponse(res, error.message, "Failed to retrieve recipe");
    }
  }
}

const addFavoriteRecipeController = async (req, res) => {
  try {
    const addFavourite = await addFavoriteRecipe(req);
    successResponse(res, addFavourite, "Recipe added to favorites successfully");
  } catch (error) {
    if (error instanceof CustomError) {
      errorResponse(res, error.message, error.message, error.statusCode);
    } else {
      errorResponse(res, error.message, "Failed to retrieve recipe");
    }
  }
}

const removeFavoriteRecipeController = async (req, res) => {
  try {
    const removeFavourite = await removeFavoriteRecipe(req);
    successResponse(res, removeFavourite, "Recipe removed from favorites successfully");
  } catch (error) {
    if (error instanceof CustomError) {
      errorResponse(res, error.message, error.message, error.statusCode);
    } else {
      errorResponse(res, error.message, "Failed to retrieve recipe");
    }
  }
}

const getFavoriteRecipesController = async (req, res) => {
  try {
    const FavoriteRecipes = await getFavoriteRecipes(req);
    successResponse(res, FavoriteRecipes, "Favorite Recipes retrieved successfully");
   
  } catch (error) {
    if (error instanceof CustomError) {
      errorResponse(res, error.message, error.message, error.statusCode);
    } else {
      errorResponse(res, error.message, "Failed to retrieve Favorite Recipes");
    }
  }
}



export default { getCategoryController,getRecipeByCategoryController,getRecipeByIdController,addFavoriteRecipeController,removeFavoriteRecipeController ,getFavoriteRecipesController};
