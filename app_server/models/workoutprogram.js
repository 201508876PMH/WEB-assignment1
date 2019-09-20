import {Exercise} from './exercise';
const mongoose = require('mongoose');

const WorkoutProgram = mongoose.model('WorkoutProgram', new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  exercises : [{ type: Exercise}]
}));

exports.WorkoutProgram = WorkoutProgram;
