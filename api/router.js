const express = require('express');
const Recipe = require('./model');

const router = express.Router();

router.get('/:recipe_id', (req, res, next) => {
    const { recipe_id } = req.params;

    Recipe.getRecipeById(recipe_id)
        .then(recipe => {
            recipe ? res.json(recipe) : res.status(404).json({ message: "Recipe not found" })
        })
        .catch(next)
})

module.exports = router;