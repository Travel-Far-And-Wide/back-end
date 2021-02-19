
exports.up = function(knex) {
    return knex.schema.createTable("home_pins", (pins) => {
        pins.increments('home_id').primary().unsigned();
        pins.integer("user_id").references("id").inTable("users")
        pins.string("title", 255).notNullable()
        pins.string("address", 255).notNullable()
        pins.decimal("lat").notNullable();
        pins.decimal("lng").notNullable();
        pins.string("description")
        pins.string("image_url")
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("home_pins");
};
