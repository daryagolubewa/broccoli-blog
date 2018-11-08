'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: {type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };


    User.checkInfo = async (userName, userEmail, userPass) => {
        let user = await User.findAll({
            where: {
                name: userName,
                email: userEmail,
                password: userPass
            }
        })
        return user;
    };

    return User;
};