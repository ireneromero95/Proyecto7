const { isAdmin, isAuth } = require('../../middlewares/auth');
const {
  getJuegos,
  postJuego,
  deleteJuego,
  updateJuego,
  getJuegosAdmin
} = require('../controllers/juegos');

const juegosRoutes = require('express').Router();

juegosRoutes.get('/', getJuegos);
juegosRoutes.get('/not-verified', [isAdmin], getJuegosAdmin);
juegosRoutes.post('/', [isAuth], postJuego);
juegosRoutes.delete('/:id', [isAdmin], deleteJuego);
juegosRoutes.put('/:id', [isAdmin], updateJuego);
module.exports = juegosRoutes;

///Me falta que los usuarios se eliminen a si mismos
//y que tengan una categoria favorita (o juego si me veo muy mal)
