const { getFoods } = require("../controllers/foods-controller");

// const upload = require("../middleWare/file-upload");
express = require("express");
const router = express.Router();
router.get("/getFoods", getFoods);

module.exports = router;
