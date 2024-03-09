const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const projectSchema = new Schema({
  name:{
    type: [String],
    require: true
  },
  description:{
    type: String,
    require: true
  },
  desktopImage:{
    type: String,
    require: true
  },
  mobileImage: {
    type: String
  },
  sourceLink: {
    type: String,
    require: true
  },
  liveLink: {
    type: String
  }
},
{
  timestamps: true
});

const projectModel = model('Project', projectSchema);
module.exports = projectModel;