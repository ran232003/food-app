const { signup, login } = require("../controllers/user-controller");

// const upload = require("../middleWare/file-upload");
express = require("express");
const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
