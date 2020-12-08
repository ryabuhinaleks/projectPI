const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
  "documents",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_event: {
      type: Sequelize.INTEGER    
    },
    id_user: {
      type: Sequelize.INTEGER    
    },
    title: {
      type: Sequelize.STRING
    },
    day: {
      type: Sequelize.DATE
    },
    role: {
      type: Sequelize.STRING
    },
    content: {
      type: Sequelize.TEXT
    },
    state: {
      type: Sequelize.STRING
    },
    },
    {
      timestamps: false
    }
);