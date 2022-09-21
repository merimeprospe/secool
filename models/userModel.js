const mongoose = require("mongoose")

const UserModel =  mongoose.model(
    "secool-api",
    {
        user_name: {
            type: String,
            required: true
        },
        matricule: {
            type: String,
            required: true
        },
        adresse_mail: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now            
        }

    },
    "user"
);

module.exports = {UserModel};