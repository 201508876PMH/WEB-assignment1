//import {Exercise} from './exercise';
const mongoose = require('mongoose');

const WorkoutProgram = mongoose.model('WorkoutProgram', new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  //exercises : [{ type: Exercise}]
}));

exports.WorkoutProgram = WorkoutProgram;

/*
//import {Exercise} from './exercise';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define a schema
const workoutProgramSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    exercises : [{ type: String}]
});

module.exports = mongoose.model('WorkoutProgram', workoutProgramSchema);*/
