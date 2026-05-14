const express = require("express");
const router = express.Router();
const data = require("../data");

router.get("/preview", (req, res) => {
  res.json(data.checkoutData);
});

router.post("/process", (req, res) => {
  const { travelers, total } = req.body;
  res.json({
    success: true,
    message: "Payment processed successfully",
    travelers: travelers || data.checkoutData.travelers,
    total: total || data.checkoutData.total,
  });
});

module.exports = router;
