
const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// ThoughtsSchema
const ThoughtsSchema = new Schema(
    {
    thoughtText: {
        type: String,
        required: true,
    
        
    },
       createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)

    },

    username: {
        type: String,
        required: true
    },
    });


    const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;