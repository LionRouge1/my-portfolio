const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const projectSchema = new Schema({
  name:String,
  description:String,
  featuredImage:String,
  technologie:String,
  link:String
});