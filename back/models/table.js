'use strict';
module.exports = function(sequelize, DataTypes) {
  var Table = sequelize.define('Table', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Table;
};