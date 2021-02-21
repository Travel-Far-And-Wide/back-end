exports.seed = function (knex) {
  return knex("users")
    .then(() => {
      return knex("users").insert([
        {
          id: 1,
          username: "test",
          password: "test",
          email: "test@test.com",
        },
      ]);
    });
};
