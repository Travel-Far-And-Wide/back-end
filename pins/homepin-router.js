const router = require("express").Router();
const pins = require("./homepin-model");
const authenticate = require("../auth/authenticate-middleware");

router.post("/add", authenticate, (req, res) => {
    const newPin = req.body;
    pins
      .add(newPin)
      .then((pin) => {
        res.status(201).json([{ message: "Home Pin added:" }, pin]);
      })
      .catch((err) => {
        res.status(500).json({ message: `Error adding pin: ${err}` });
      });
  });
  router.get("/:id", authenticate, (req, res) => {
    const { id } = req.params;
    pins
      .findByUserId(id)
      .then((pin) => {
        if (pin) {
          res.status(200).json(pin);
        } else {
          res.status(404).json({ message: `User with id ${id} does not exist` });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: `Error finding Home Pin: ${err}` });
      });
  });
  router.put("/edit/:id", authenticate, (req, res) => {
    const pinChanges = req.body;
    const { id } = req.params;
    pins
      .update(id, pinChanges)
      .then((e) => {
        if (e) {
          res
            .status(200)
            .json([{ message: "Home Pin updated with the following changes:" }, e]);
        } else {
          res.status(404).json({ message: "The Home Pin could not be found" });
        }
      })
      .catch((err) => {
        res
          .status(500)
          .json({ message: `There was an error updating the Home Pin: ${err}` });
      });
  });
  router.delete("/delete/:id", authenticate, (req, res) => {
    const { id } = req.params;
    pins
      .remove(id)
      .then((pin) => {
        if (pin > 0) {
          res
            .status(200)
            .json({ message: `Home Pin with id: ${id} successfully deleted` });
        } else {
          res.status(404).json({ message: "The Home Pin could not be found" });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: ` Error removing the Home Pin: ${err}` });
      });
  });
  module.exports = router;