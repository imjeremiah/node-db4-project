// const db = require('../data/db-config');

// async function getRecipeById(recipe_id) {
//     const rows = await db('recipes as r')
//     .join('steps as s', 'r.recipe_id', 's.recipe_id')
//     .join('step_ingredients as si', 's.step_id', 'si.step_id' )
//     .join('ingredients as i', 'si.ingredient_id', 'i.ingredient_id')
//     .select('r.recipe_id', 'r.recipe_name', 'r.created_at', 's.step_id', 's.step_number', 's.step_instructions', 'i.ingredient_id', 'i.ingredient_name', 'si.quantity')
//     .where('r.recipe_id', recipe_id)
//     .orderBy('s.step_number')

//     const result = {
//         recipe_id: rows[0].recipe_id,
//         recipe_name: rows[0].recipe_name,
//         created_at: rows[0].created_at,
//         steps: rows.map(step => ({ 
//             step_id: step.step_id, 
//             step_number: step.step_number, 
//             step_instructions: step.instructions,
//             ingredients: rows[0].ingredient_id ? rows.map(ingredient => ({
//                 ingredient_id: ingredient.ingredient_id,
//                 ingredient_name: ingredient.ingredient_name,
//                 quantity: ingredient.quantity
//             })) : []
//         }))
//     }

//     return result
// }

// module.exports = {
//     getRecipeById
// }

const db = require('../data/db-config')

const getRecipeById = async recipe_id => {
  const recipe = await db('recipes')
    .where('recipe_id', recipe_id)
    .first()
  
  const steps = await db('steps as st')
    .select('st.step_id', 'st.step_number', 'st.step_instructions')
    .where('recipe_id', recipe_id)
    .orderBy('st.step_number')

  recipe.steps = await Promise.all(steps.map(async step => {
    const ingredients = await db('step_ingredients as si')
      .select('i.ingredient_id', 'i.ingredient_name', 'si.quantity')
      .join('ingredients as i', 'i.ingredient_id', 'si.ingredient_id')
      .where('si.step_id', step.step_id)

    return {...step, ingredients: ingredients}
  }))
  
  return recipe
}

module.exports = {
  getRecipeById
}