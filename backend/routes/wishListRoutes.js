const express = require("express");
const router = express.Router();
const data = require("../data");

router.get("/", (req, res) => {
  res.json(data.wishListTrips);
});

router.patch("/:id/like", (req, res) => {
  const id = Number(req.params.id);
  const trip = data.wishListTrips.find((item) => item.id === id);

  if (!trip) {
    return res.status(404).json({ message: "Trip not found" });
  }

  trip.liked = !trip.liked;
  trip.likes = trip.liked ? trip.likes + 1 : trip.likes - 1;
  res.json(trip);
});

module.exports = router;
