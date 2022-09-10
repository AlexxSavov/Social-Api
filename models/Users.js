const { Schema, model } = require('mongoose');

const UsersSchema = new Schema(
    {
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,

    },

    
    
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false
    }
)

const Users = model('Users', UsersSchema);


module.exports = Users;