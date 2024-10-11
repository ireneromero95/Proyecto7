const Plataforma = require('../models/plataformas');

const postPlataforma = async (req, res, next) => {
  try {
    const newPlataforma = new Plataforma(req.body);
    const plataformaSaved = await newPlataforma.save();
    return res.status(201).json(plataformaSaved);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getPlataformas = async (req, res, next) => {
  try {
    const plataformas = await Plataforma.find();
    return res.status(200).json(plataformas);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const updatePlataforma = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newPlataforma = new Plataforma(req.body);
    console.log(newPlataforma);
    newPlataforma._id = id;
    const plataformaUpdated = await Plataforma.findByIdAndUpdate(
      id,
      newPlataforma,
      {
        new: true
      }
    );
    return res.status(200).json(plataformaUpdated);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const deletePlataforma = async (req, res, next) => {
  try {
    const { id } = req.params;
    const plataformaDeleted = await Plataforma.findByIdAndDelete(id);
    return res.status(200).json(plataformaDeleted);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
  getPlataformas,
  postPlataforma,
  deletePlataforma,
  updatePlataforma
};
