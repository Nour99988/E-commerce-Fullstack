const ProductsSchema = require("../model/productsModel");

const productsCtrl = {
  getAll: async (req, res) => {
    res.status(200).json("dsadsa");
  },

  getOne: async (req, res) => {
    const { id } = req.params;
    res.status(200).json("test");
  },
  addone: async (req, res) => {
    // const { access } = req.header;
    const { id, title, descripion, rate, price, discount } = req.body;
    // res.status(200).json("test");
    console.log(title);
    try {
      const product = await ProductsSchema.create({ id, title, descripion, rate, price, discount });
      res.status(200).json({ id, title, descripion, rate, price, discount });
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    res.status(200).json("test");
  },
  editone: async (req, res) => {
    const { id, title, descripion, rate, price, discount } = req.body;
    res.status(200).json("test");
  },
};

module.exports = productsCtrl;
