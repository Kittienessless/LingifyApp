const createConnections = sequelize => {
  const {User, Token} = sequelize.models;

  
  User.hasOne(Token);
  Token.belongsTo(User);

}
  

module.exports = createConnections;

//TODO:
// починить связи 
