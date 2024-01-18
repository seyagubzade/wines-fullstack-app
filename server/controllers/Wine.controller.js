const { WineModel } = require("../models/Wine.model");

const WineController = {
  getAll: async (req, res) => {
    try {
      const data = await WineModel.find({});
      res.send(data).status(200);
    } catch (err) {
      res.send(err).status(404);
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const target = await WineModel.findById(id);
      res.send(target).status(200);
    } catch (err) {
      res.send(err).status(404);
    }
  },
  deleteById: async (req, res) => {
    try {
      const { id } = req.params;
      await WineModel.findByIdAndDelete(id);
      const allData = await WineModel.find({});
      res.send(allData).status(200);
    } catch (err) {
      res.send(err).status(404);
    }
  },
  addNew: async (req, res) => {
    try {
      const { name, year, price, country, type, desc,image } = req.body;
      const newProd = new WineModel({ name, year, price, country, type, desc, image });
      await newProd.save();
      res.send(newProd).status(200);
    } catch (err) {
      res.send(err).status(404);
    }
  },
};

module.exports = { WineController };
