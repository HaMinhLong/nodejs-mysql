const fs = require("fs");
const db = require("../config/db.config.js");
const Places = db.places;
const Sequelize = db.sequelize;
const { QueryTypes } = require("sequelize");

// Post
exports.create = async (req, res) => {
  await Places.create({
    id: req.body.id,
    name: req.body.name,
    status: req.body.status,
  }).then((places) => {
    // Send created to client
    res.send(places);
  });
};

// FETCH all
exports.findAll = (req, res) => {
  Places.findAll().then((place) => {
    // Send all to Client
    res.send(place);
  });
};

// // Find Id
exports.findById = (req, res) => {
  Places.findById(req.params.id).then((place) => {
    res.send(place);
  });
};

// // Update
exports.update = (req, res) => {
  const id = req.params.id;
  Places.update(
    {
      name: req.body.name,
      status: req.body.status,
    },
    { where: { id: req.params.id } }
  ).then(() => {
    res.status(200).send("updated successfully a Places with id = " + id);
  });
  // };
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Places.destroy({
    where: { id: id },
  }).then(() => {
    res.status(200).send("deleted successfully a Places with id = " + id);
  });
};
