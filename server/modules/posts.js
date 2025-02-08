//TODO: 
// посты для справочника, может быть какой нибудь парсер для копирования инфы по языыкам из книг
// парсер если что нужно выделить в отдельный алгоритм где нибудь в помощниках
const {DataTypes} = require("sequelize");

const Post = sequelize => sequelize.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    text_body: {
      type: DataTypes.STRING,
        allowNull: false
    },
    author: {
      type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = {
    Post
}