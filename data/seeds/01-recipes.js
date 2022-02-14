const recipes = [
  { recipe_name: 'Mac and Cheese' },
  { recipe_name: 'Bread' },
  { recipe_name: 'Scrambled Eggs' }
]

exports.recipes = recipes

exports.seed = function (knex) {
  return knex('recipes').insert(recipes)
}
