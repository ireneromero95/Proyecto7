const mongoose = require('mongoose');

const juegoSchema = new mongoose.Schema(
  {
    gameName: { type: String, required: true },
    imagen: { type: String, required: true },
    categoria: {
      type: String,
      required: true,
      enum: [
        'Roguelike',
        'Plataformas',
        'Accion',
        'Carreras',
        'Lucha',
        'Simulacion'
      ]
    },
    plataformas: [
      { type: mongoose.Types.ObjectId, required: false, ref: 'plataformas' }
    ],
    verified: { type: Boolean, required: true }
  },
  { timestamps: true, collection: 'juegos' }
);

const Juego = mongoose.model('juegos', juegoSchema, 'juegos');

module.exports = Juego;
