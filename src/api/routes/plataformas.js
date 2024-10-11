const { isAdmin } = require('../../middlewares/auth');
const {
  getPlataformas,
  postPlataforma,
  deletePlataforma,
  updatePlataforma
} = require('../controllers/plataformas');

const plataformasRoutes = require('express').Router();

plataformasRoutes.get('/', getPlataformas);
plataformasRoutes.post('/', [isAdmin], postPlataforma);
plataformasRoutes.delete('/:id', [isAdmin], deletePlataforma);
plataformasRoutes.put('/:id', [isAdmin], updatePlataforma);
module.exports = plataformasRoutes;
