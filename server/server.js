const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(" MongoDB error:", err));

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'Home.html'));
});

const subscribeModel = require('../dataModels/subscribeFormHomePage');

app.post('/', async (req, res) => {
  try {
    const dataFromUser = req.body;
    await subscribeModel.create({
      First: dataFromUser.First,
      Last: dataFromUser.Last,
      Email: dataFromUser.Email
    });
    res.redirect('/');
  } catch (err) {
    console.error(" Error saving user:", err);
    res.status(500).send("Database error");
  }
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
