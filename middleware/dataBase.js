const mongoose = require('mongoose')
require('dotenv').config

module.exports = async () => {
    await mongoose.connect( process.env.DATABASE, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Attention Connexion à MongoDB échouée !'));
    return mongoose;
}


      
  
