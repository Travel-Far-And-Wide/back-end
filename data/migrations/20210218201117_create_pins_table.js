
exports.up = function(knex) {
    return knex.schema.createTable("pins", (pins) => {
        pins.increments('pin_id').primary().unsigned();
        pins.integer("user_id").references("id").inTable("users")
        pins.string("name", 255)
        pins.string("title", 255).notNullable()
        pins.string("address", 255)
        pins.decimal("lat").notNullable();
        pins.decimal("lng").notNullable();
        pins.string("date").notNullable();
        pins.string("description")
        pins.string("image_url")
        pins.string("category").notNullable();
        pins.boolean("visited").notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("pins");
};
