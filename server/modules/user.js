const { Sequelize, DataTypes } = require("sequelize");


 const User = sequelize => sequelize.define('Users', {
    user_id: {
      type: DataTypes.INTEGER,
       autoIncrement: true,
       primaryKey: true,
       allowNull: false
     },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
   
    role: {
      type: DataTypes.STRING,
      allowNull: false
    }
   
   })

 
   module.exports = {
    User,
    checkAuth: async (token) => {
      const userId = await getUserIdByToken(token);
      if (!userId) {
          throw new AuthError("Пользователь не авторизован");
      }
      return userId;
  }
  }