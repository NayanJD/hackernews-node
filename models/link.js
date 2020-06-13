"use strict";
module.exports = (sequelize, DataTypes) => {
  const Link = sequelize.define(
    "Link",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      description: DataTypes.STRING,
      url: DataTypes.STRING,
    },
    {}
  );
  Link.associate = function (models) {
    // associations can be defined here
  };
  return Link;
};
