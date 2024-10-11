const Juego = require('../models/juegos');

const postJuego = async (req, res, next) => {
  try {
    const newJuego = new Juego(req.body);
    const juegoSaved = await newJuego.save();

    if (req.user.rol === 'admin') {
      newJuego.verified = true;
    } else {
      newJuego.verified = false;
    }
    return res.status(201).json(juegoSaved);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getJuegos = async (req, res, next) => {
  try {
    const juegos = await Juego.find({ verified: true }).populate('plataformas');
    return res.status(200).json(juegos);
  } catch (error) {
    return res.status(400).json(error);
  }
};
const getJuegosAdmin = async (req, res, next) => {
  try {
    const juegos = await Juego.find({ verified: false }).populate(
      'plataformas'
    );
    return res.status(200).json(juegos);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const updateJuego = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newJuego = new Juego(req.body);
    newJuego._id = id;
    const juegoUpdated = await Juego.findByIdAndUpdate(id, newJuego, {
      new: true
    });
    return res.status(200).json(juegoUpdated);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const deleteJuego = async (req, res, next) => {
  try {
    const { id } = req.params;
    const juegoDeleted = await Juego.findByIdAndDelete(id);
    return res.status(200).json(juegoDeleted);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
  getJuegos,
  postJuego,
  deleteJuego,
  updateJuego,
  getJuegosAdmin
};
