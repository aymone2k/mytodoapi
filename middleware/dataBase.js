const mongoose = require('mongoose')

async function config() {
    await mongoose.connect( process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Attention Connexion à MongoDB échouée !'));
}

module.exports.config = config;