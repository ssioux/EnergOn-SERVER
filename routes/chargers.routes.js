const router = require("express").Router();

const pool = require('../db/index')


// GET "/chargers" => List of Chargers from DB
router.get("/", async (req, res, next) => {

  const response = await pool.query('SELECT NOW()')
  console.log(response)

  res.json(response.rows[0].now);

});

// GET "/chargers/:chargerId/details" => Charger details by Id from DB
router.get("/:chargerId/details", (req, res, next) => {
    const {chargerId} = req.params
    res.json(`Details of this Id:${chargerId} Charger!`);
  });



module.exports = router;
