const mongoose = require('mongoose');


const resetPasswordSchema = mongoose.Schema({
    email: {type: String, required: true},
    resetPasswordToken:{type: String, required: true},
    resetExpires: {type: Number, required: true},
    createdAt: {type: Date, default: Date.now()},

});



module.exports= mongoose.model('ResetPassword', resetPasswordSchema);