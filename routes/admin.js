const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));

router.get("/add-product", (req, res) => {
  res.send(
    '<form action="/admin/add-product" method="POST"><label for="name">Title: </label><input type="text" id="name" name="name"><label for="size">Size: </label><input type="text" name="size" id="size"><button type="submit">Submit</form>'
  );
});

router.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/shop");
});

module.exports = router;
