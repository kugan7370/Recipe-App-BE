import axios from 'axios';
import User from "../models/userModel.js";
import CustomError from '../utils/customError.js';
const getCategories = async () => {
  try {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
    return response.data.categories; 
  } catch (error) {
    throw new Error('Failed to fetch categories from external API');
  }
};

const getRecipesByCategory = async (category) => {
  try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    return response.data.meals;
  } catch (error) {
    throw new Error('Failed to fetch recipes from external API');
  }
};

const getRecipeById= async (id) => {
  try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    return response.data.meals[0];
  } catch (error) {
    throw new Error('Failed to fetch recipe from external API');
  }
};

const addFavoriteRecipe = async (req) => {
  const { recipeId } = req.params;
  const { id:userId } = req.user;

  try {
    if (!recipeId) {
      throw new CustomError('Recipe ID is required', 400); 
    }

    const user = await User.findById(userId);
    if (!user) {
      throw new CustomError('User not found', 404); 
    }

    if (user.favorites.includes(recipeId)) {
      throw new CustomError('Recipe already in favorites', 409);
    }

    user.favorites.push(recipeId);
    await user.save();

    return { message: 'Recipe added to favorites successfully', favorites: user.favorites };

  } catch (error) {
    throw new CustomError(error.message, error.statusCode || 500);
  }
};



const removeFavoriteRecipe = async (req) => {
  const { recipeId } = req.params;
  const { id:userId } = req.user;

  try {
    if (!recipeId) {
      throw new CustomError('Recipe ID is required', 400); 
    }

    const user = await User.findById(userId);
    if (!user) {
      throw new CustomError('User not found', 404); 
    }

    if (!user.favorites.includes(recipeId)) {
      throw new CustomError('Recipe not in favorites', 409);
    }

    user.favorites = user.favorites.filter(favorite => favorite !== recipeId);
    await user.save();

    return { message: 'Recipe removed from favorites successfully', favorites: user.favorites };

  } catch (error) {
    throw new CustomError(error.message, error.statusCode || 500);
  }
 
}

const getFavoriteRecipes = async (req) => {
  const { id:userId } = req.user;
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new CustomError('User not found', 404); 
    }
    return user.favorites;
  }
  catch (error) {
    throw new CustomError(error.message, error.statusCode || 500);
  }
}



export { getCategories ,getRecipesByCategory,getRecipeById,addFavoriteRecipe,removeFavoriteRecipe,getFavoriteRecipes};
