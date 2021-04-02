const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth.js");
const authCheckRolePeaky = require("../../middleware/authCheckRolePeaky.js");
const users = require("../controllers/users.controller.js");

router.post("/users", users.create);

router.get("/login", users.login);

router.get("/users", auth, users.getAll);

router.get("/users/:userId", auth, users.getUserById);

router.put("/users/:userId", authCheckRolePeaky, users.update);

module.exports = router;