const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

const chargersRoutes = require("./chargers.routes");
router.use("/chargers", chargersRoutes);



module.exports = router;
