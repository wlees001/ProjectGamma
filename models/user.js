"use strict";

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define("User", {
    firstname: {
      type: DataTypes.STRING,
      notEmpty: true
  },
  lastname: {
      type: DataTypes.STRING,
      notEmpty: true
  },
    username: {
      type: DataTypes.STRING,
      unique: true,
      // allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Password",
      // notEmpty: true,
      // nullable: true
    },
    email: {
      type: DataTypes.STRING,
      // unique: true,
      // nullable: true,
      defaultValue: "Email Address",
      // // allowNull: false,
      // validate: {
      //   isEmail: true
      // }
    },
    // status: {
    //   type: DataTypes.ENUM("active", "inactive"),
    //   defaultValue: "active"
    // },
    // profile: {
    //   type: DataTypes.ENUM("Mover", "Customer", "Admin"),
    //   defaultValue: "Customer",
    //   // allowNull: false
    // },
    // createdAt: {
    //     type: DataTypes.DATE(3),
    //     defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
    //   },
    //  updatedAt: {
    //     type: DataTypes.DATE(3),
    //     defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
    //   },
  }, 
  {
      timestamps:false
  });

  User.associate = function(models) {
    // associations can be defined here
    //User.hasMany(models.AuthToken);
    User.hasOne(models.Mover);
    User.hasOne(models.Customer);
  };

  return User;
};
