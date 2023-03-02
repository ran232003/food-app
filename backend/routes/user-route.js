const { signup, login, sendMail } = require("../controllers/user-controller");

// const upload = require("../middleWare/file-upload");
express = require("express");
const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
router.post("/sendMail", sendMail);

module.exports = router;
