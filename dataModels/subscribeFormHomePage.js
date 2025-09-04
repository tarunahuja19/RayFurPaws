const mongoose = require('mongoose');
const subscribeFormSchema = new mongoose.Schema({
  First: String,
  Last: String,
  Email: String,
});
const subscribeFormModel = mongoose.model('Subscribe', subscribeFormSchema);
module.exports = subscribeFormModel;

