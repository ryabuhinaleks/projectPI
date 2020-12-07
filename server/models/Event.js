const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
  "events",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_user: {
      type: Sequelize.INTEGER    
    },
    title: {
      type: Sequelize.STRING
    },
    sDate: {
      type: Sequelize.DATE
    },
    c1Date: {
      type: Sequelize.DATE
    },
    c_1Date: {
        type: Sequelize.DATE
    },
    fDate: {
      type: Sequelize.DATE
    },
    participants: {
      type: Sequelize.STRING
    },
    img: {
      type: Sequelize.STRING
    },
    },
    {
      timestamps: false
    }
);