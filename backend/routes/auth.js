
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const { name, email, password, zodiacSign } = req.body;
  const hash = await bcrypt.hash(password, 10);
  try {
    const newUser = new User({ name, email, password: hash, zodiacSign });
    await newUser.save();
    res.json({ message: "User registered" });
  } catch (err) {
    res.status(400).json({ error: "User already exists" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ error: "Invalid credentials" });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token, zodiacSign: user.zodiacSign });
});

module.exports = router;
