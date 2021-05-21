const mongoose = require('mongoose');

const Schema = mongoose.Schema;
function validator (value) {
    return !Number.isNaN(value);
  };

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
      type: {
          type: String,
          required: [true, 'Select a type.']
      },
      name: {
        type: String,
        required: [true, 'Enter a name for the workout.']
      },
      duration: {
        type: Number,
        required: [true, 'Enter duration in minutes'],
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
        required: [true, 'Enter an amount in pounds.'],
        validate: [validator, 'Weight must be a number']
      },
      sets: {
        type: Number,
        required: [true, 'Enter a number of sets completed.'],
        validate: [validator, 'Sets must be a number']
      },
      reps: {
        type: Number,
        required: [true, 'Enter the number of reps.'],
        validate: [validator, 'Reps must be a number']
      },
  }]
},
{
toJSON: {
  virtuals: true
}
});

workoutSchema.virtual('totalDuration').get(function() {
  return this.exercises.reduce((sum, exercise) => {
    return sum + exercise.duration;
  }, 0)
});

const Workout = mongoose.model('workout', workoutSchema);

module.exports = Workout;