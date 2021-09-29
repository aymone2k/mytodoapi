const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const userSchema = mongoose.Schema(
    {
    name: {type: String, required:true},
    email: {type: String, required:true, unique: true, trim: true},
    password:  {type: String, required:true, trim:true},
    createdAt: {type: Date, default: Date.now},
    image: String,
});
 

 userSchema.statics.generatePasswordHash = (password) => {
   const salt = bcrypt.genSaltSync(10);
    const hash =  bcrypt.hashSync(password, salt);
    return hash;
}; 

userSchema.statics.validatePassword = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword)
};

module.exports = mongoose.model('User', userSchema); 