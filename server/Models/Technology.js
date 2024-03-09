const mongoose = require('mongoose');
const { Schema, model} = mongoose;

const technologySchema = new Schema({
  name: String,
  description: String
});

const technologyModel = model('Technology', technologySchema);
module.exports = technologyModel;