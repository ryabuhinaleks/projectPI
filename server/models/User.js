const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fname: {
      type: Sequelize.STRING
    },
    lname: {
      type: Sequelize.STRING
    },
    country: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
        type: Sequelize.TEXT
    },
    img: {
      type: Sequelize.STRING
    },
    about: {
      type: Sequelize.TEXT
    },
    pin: {
      type: Sequelize.STRING
    },
    },
    {
      timestamps: false
    }
);