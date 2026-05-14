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

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = data.wishListTrips.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Trip not found" });
  }

  const deleted = data.wishListTrips.splice(index, 1)[0];
  res.json({ message: "Removed from wish list", data: deleted });
});

module.exports = router;
