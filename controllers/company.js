const Company = require("./models/Company");
const bodyParser = require("body-parser");
var express = require("express");
const router = express.Router();

router.get("/getallclients", async function (req, res) {
  console.log(req.query.page);
  const page = req.query.page ? req.query.page : 1;
  const clients = await Company.find();
  res.status(200).json({
    clients: clients.slice((page - 1) * 5, page * 5),
    pagecount: clients.length,
    rajesh: "mn",
  });
});

router.post("/creatclient", async function (req, res) {
  const { name, email, phonenumber, company, image, website } = req.body;
  const user = Client({
    name: name,
    email: email,
    phonenumber: phonenumber,
    company: company,
    image: image,
    website: website,
  });
  await user.save();

  res.status(200).json({
    clients: "useddr",
  });
});

router.post("/editclient", async function (req, res) {
  console.log(req.body, "rajesh");
  const user = await Client.findById(req.body.id);
  const { name, email, phonenumber, company } = req.body;
  const u = user({
    name: name,
    email: email,
    phonenumber: phonenumber,
    company: company,
  });
  await u.save();
  res.status(200).json({
    users: "user",
    id: req.body,
  });
});

router.get("/deleteclient/:id", async function (req, res) {
  console.log(req.params.id);
  const user = await Client.findById(req.params.id);
  await user.remove();
  res.status(200).json({
    deleted: "ok",
    id: req.params.id,
  });
});

router.get("/getonequestion/:id", async (req, res, next) => {
  console.log(req.params.d);
  res.status(200).json({
    success: true,
    id: req.params.id,
  });
});

module.exports = router;
