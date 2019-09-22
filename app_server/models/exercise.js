/*const mongoose = require('mongoose');

const Exercise = mongoose.model('Exercise', new mongoose.Schema({
  exercise: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  set: {
    type: Int,
    required: true
  },
  reps_time: {
    type: String,
    required: true
  },
}));

exports.Exercise = Exercise; */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define a schema
const exerciseSchema = new Schema({
    exercise: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    set: {
        type: Int,
        required: true
    },
    reps_time: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Exercise', exerciseSchema);