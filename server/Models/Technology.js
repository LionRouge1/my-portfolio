const mongoose = require('mongoose');
const { Schema, model} = mongoose;

const technologySchema = new Schema({
  name: {
    type: String,
    require: true
  },
  description: String
});

const technologyModel = model('Technology', technologySchema);
module.exports = technologyModel;