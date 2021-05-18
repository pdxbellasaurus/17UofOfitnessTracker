const mongoose = require("mongoose");

const Schema = mongoose.Schema;
function validator (v) {
    return !Number.isNaN(v);
  };

const workoutSchema = new Schema({
  day:{
    type: Date,
    default: Date.now
  },
  workoutData:[{
      type:{
          type: String,
          required: 'Select a type.'
      },
      name: {
        type: String,
        trim: true,
        required: 'Enter a name for the workout.'
      },
      duration: {
        type: Number,
        required: 'Enter duration in minutes',
        validate: [validator, 'Duration must be a number']
      },
      //CARDIO ONLY
      distance: {
        type: Number,
        validate: [validator, 'Distance must be a number']
       
      },
      //RESISTANCE ONLY
      weight: {
        type: Number,
        required: 'Enter an amount in pounds.',
        validate: [validator, 'Weight must be a number']
      },
      sets: {
        type: Number,
        required: 'Enter a number of sets completed.',
        validate: [validator, 'Sets must be a number']
      },
      reps: {
        type: Number,
        required: 'Enter the number of reps.',
        validate: [validator, 'Reps must be a number']
      }
  }]
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;