const Juego = require('../../api/models/juegos');
const juegos = require('../../data/juegos');
const mongoose = require('mongoose');
require('dotenv').config();

//De nuevo conecto con mongoose, no olvidar el dotenv
mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    // Busco todas las pelis
    const allJuegos = await Juego.find();
    // Si existen películas previamente, lo vacío con drop
    if (allJuegos.length) {
      await Juego.collection.drop();
      console.log('Éxito borrando datos');
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    //Una vez vaciada rellenamos de nuevo
    await Juego.insertMany(juegos);
    console.log('Éxito insertándolos');
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  // Por último nos desconectaremos de la DB.
  .finally(() => mongoose.disconnect());
