const router = require("express").Router();

const pool = require("../db/index");

// GET "/chargers" => List of Chargers from DB
router.get("/", async (req, res, next) => {
  const allChargers = await pool.query(
    'SELECT * FROM "public"."charge_point" LIMIT 1000'
  );
  console.log(allChargers.rows);
  res.status(200).json(allChargers.rows);
});

// GET "/chargers/:chargerId/details" => Charger details by Id from DB
router.get("/details", async (req, res, next) => {
  // const {chargerId} = req.params
  // res.json(`Details of this Id:${chargerId} Charger!`);
  const chargerById = await pool.query(
    'SELECT * FROM "public"."charge_point_reading" LIMIT 1000'
  );
  console.log(chargerById.rows);

  res.send("charge point details by Id");
});

module.exports = router;
