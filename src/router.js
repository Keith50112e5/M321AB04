const router = require("express").Router();

router.get("/", (req, res) => res.json("OK"));

router.get("/:msg", (req, res) => {
  const { msg } = req.params;
  res.json({ msg });
});

module.exports = router;
