const mongoose = require('mongoose');
const { Schema, model} = mongoose;

const projectTechnologySchema = new Schema({
  projectId: {
    type: Schema.Types.ObjectId,
    ref: 'Project'
  },
  technologyId: {
    type: Schema.Types.ObjectId,
    ref: 'Technology'
  }
});

const projectTechnologyModel = model('ProjectTechnology', projectTechnologySchema);
module.exports = projectTechnologyModel;