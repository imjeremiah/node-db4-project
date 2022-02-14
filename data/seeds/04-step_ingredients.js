const step_ingredients = [
  { step_id: 1, ingredient_id: 1, quantity: .4},
  { step_id: 1, ingredient_id: 2, quantity: 2},
  { step_id: 2, ingredient_id: 2, quantity: .1},
  { step_id: 2, ingredient_id: 4, quantity: .001},
  { step_id: 3, ingredient_id: 3, quantity: .5},
  { step_id: 5, ingredient_id: 5, quantity: .5},
  { step_id: 5, ingredient_id: 6, quantity: .001},
  { step_id: 5, ingredient_id: 7, quantity: .01},
  { step_id: 6, ingredient_id: 2, quantity: .4},
  { step_id: 13, ingredient_id: 8, quantity: 4},
  { step_id: 14, ingredient_id: 9, quantity: .03},
]

exports.step_ingredients = step_ingredients

exports.seed = function (knex) {
  return knex('step_ingredients').insert(step_ingredients)
}