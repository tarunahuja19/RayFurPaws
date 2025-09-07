const path = require('path');
require('dotenv').config({path:path.join(__dirname,'../.env')});
const express = require('express');
const app = express();
const mongoose = require('mongoose');


console.log("MONGO_URI from env:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(" MongoDB error:", err));
mongoose.createConnection(process.env.MONGO_URI_2)
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'Home.html'));
});



app.get('/our-story', (req, res) => {
  res.render(path.join(__dirname, '..', 'views', 'our-story.ejs'))
})

app.get('/team', (req, res) => {
  res.render(path.join(__dirname, '..', 'views', 'team.ejs'))
})
app.get('/contact-us', (req, res) => {
  res.render(path.join(__dirname, '..', 'views', 'contact-us.ejs'))
})
app.get('/volunteer-with-us', (req, res) => {
  res.render(path.join(__dirname, '..', 'views', 'volunteer.ejs'))
})

const subscribeModel = require('../dataModels/subscribeFormHomePage');
const volunteerFormModel = require('../dataModels/volunteer')
app.post('/volunteer-with-us', async (req, res) => {
  const dataVolunteer = req.body;
  await volunteerFormModel.create({
    name: dataVolunteer.name,
    email: dataVolunteer.email,
    phone: dataVolunteer.phone,
    skills: dataVolunteer.skills,
    whyVolunteer: dataVolunteer.whyVolunteer
  });
  res.redirect('/')
})

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
