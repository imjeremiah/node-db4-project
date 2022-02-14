const ingredients = [
  { ingredient_name: 'macaroni' },
  { ingredient_name: 'water' },
  { ingredient_name: 'cheese' },
  { ingredient_name: 'sodium citrate' },
  { ingredient_name: 'flour' },
  { ingredient_name: 'yeast' },
  { ingredient_name: 'salt' },
  { ingredient_name: 'eggs' },
  { ingredient_name: 'butter' },
]

exports.ingredients = ingredients

exports.seed = function (knex) {
  return knex('ingredients').insert(ingredients)
}
