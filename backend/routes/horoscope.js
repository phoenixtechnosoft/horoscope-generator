
const express = require("express");
const router = express.Router();

const horoscopes = {
  aries: "Today brings energy and focus...",
  taurus: "A day to focus on personal growth...",
  gemini: "Communication is your strength today...",
  cancer: "Home and family take center stage...",
  leo: "Your leadership shines bright...",
  virgo: "Attention to detail will pay off...",
  libra: "Balance and beauty guide your day...",
  scorpio: "Intuition is strong and revealing...",
  sagittarius: "Adventure awaits, embrace it...",
  capricorn: "Work hard and stay grounded...",
  aquarius: "Innovation and originality serve you...",
  pisces: "Creativity and empathy lead the way..."
};

router.get("/:sign", (req, res) => {
  const sign = req.params.sign.toLowerCase();
  const horoscope = horoscopes[sign];
  if (!horoscope) return res.status(404).json({ error: "Invalid sign" });
  res.json({ horoscope });
});

module.exports = router;
