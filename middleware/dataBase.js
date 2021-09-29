const mongoose = require('mongoose')

async function config(arg1, arg2, arg3) {
    await mongoose.connect( process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    /* .then(() => console.log())
    .catch(() => console.log('Attention Connexion à MongoDB échouée !')); */
    .then(async mongoose => {
        try{
            console.log('Connexion à MongoDB réussie !');
            await command.execute(client, message, args);
        }
        finally{
            mongoose.connection.close();
        }
    });
}

module.exports.config = config; 