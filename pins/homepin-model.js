const db = require("../data/dbConfig.js");

module.exports = {
  add,
  findByUserId,
  update,
  remove,
};

async function add(pin) {
  const [home_id] = await db("home_pins").insert(pin, "home_id");
  return db("home_pins").where({ home_id }).first();
}

function findByUserId(user_id) {
  return db("home_pins").where("user_id", user_id);
}
async function update(user_id, changes) {
  await db("home_pins").where("user_id", user_id).update(changes);
  return db("home_pins").where({ user_id }).first();
}
function remove(user_id) {
  return db("home_pins").where("user_id", user_id).del();
}
