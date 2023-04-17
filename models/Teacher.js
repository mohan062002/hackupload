const mongoose = require('mongoose');
const {Schema} = mongoose;

const TeacherSchema = new Schema({
  name: String,
  email: {type:String, unique:true},
  password: String,
  register:{type:String, unique:true},
  year:String,
  ccourse:String,
});

const TeacherModel = mongoose.model('Teacher', TeacherSchema);

module.exports = TeacherModel;