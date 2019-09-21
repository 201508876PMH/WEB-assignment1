//import {Exercise} from './exercise';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('WorkoutProgram', workoutSchema);