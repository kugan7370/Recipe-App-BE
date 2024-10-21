import axios from 'axios';

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

export { getCategories ,getRecipesByCategory,getRecipeById};
