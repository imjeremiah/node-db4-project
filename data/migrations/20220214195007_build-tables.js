
exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', (table) => {
            table.increments('recipe_id')
            table.string('recipe_name', 128)
                .unique()
                .notNullable()
            table.datetime('created_at')
                .defaultTo(knex.fn.now())
        })
        .createTable('steps', (table) => {
            table.increments('step_id')
            table.integer('step_number')
                .unsigned()
                .notNullable()
            table.text('step_instructions')
                .notNullable()
            table.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipe_id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')

        })
        .createTable('ingredients', (table) => {
            table.increments('ingredient_id')
            table.string('ingredient_name', 128)
                .unique()
                .notNullable()
        })
        .createTable('step_ingredients', (table) => {
            table.increments('step_ingredient_id')
            table.integer('step_id')
                .unsigned()
                .notNullable()
                .references('step_id')
                .inTable('steps')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
            table.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('ingredient_id')
                .inTable('ingredients')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
            table.float('quantity', 3, 10)
                .notNullable()
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('step_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('recipes')
};
