const db = require("../data/dbConfig.js");

module.exports = {
  add,
  find,
  findById,
  findByUserId,
  update,
  remove,
};

async function add(pin) {
  const [pin_id] = await db("pins").insert(pin, "pin_id");
  return db("pins").where({ pin_id }).first();
}
function find() {
  return db("pins").select();
}

function findById(pin_id) {
  return db("pins").where("pin_id", pin_id ).first();
}
function findByUserId(user_id) {
  return db("pins").where("user_id", user_id);
}
async function update(pin_id, changes) {
  await db("pins").where("pin_id", pin_id).update(changes);
  return db("pins").where({ pin_id }).first();
}
function remove(pin_id) {
  return db("pins").where("pin_id", pin_id).del();
}
