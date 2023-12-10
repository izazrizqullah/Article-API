const express = require("express");
const router = express.Router();
const cArticle = require("../controllers/articles");
const mid = require("../middlewares/restrict");
const { multerUpload } = require("../middlewares/cloudStorage");

router.post(
  "/create",
  mid.mustAdmin,
  multerUpload.single("image"),
  cArticle.create
);
router.get("/get-all", mid.mustLogin, cArticle.getAll);
router.delete("/delete/:id", mid.mustLogin, cArticle.destroy);

module.exports = router;
