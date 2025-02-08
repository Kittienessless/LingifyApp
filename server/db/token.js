const {nanoid} = require("nanoid");
const {getDb} = require("./db.js");

module.exports = {
    getUserIdByToken: async (token) => {
        const result = await getDb().models.Token.findOne({where: {token}});
        return result?.id;
    },
    deleteByToken: async (token) => {
        await getDb().models.Token.destroy({where: {token}});
    },
    addToken: async (id) => {
        const token = nanoid();
        const tokenRow = await getDb().models.Token.findOne({where: {id}});
        if (tokenRow) {
            tokenRow.token = token;
            await tokenRow.save();
        } else {
            const newTokenRow = await getDb().models.Token.create({token});
            const user = await getDb().models.User.findByPk(id);
            await newTokenRow.setUser(user);
        }
        return token;
    },
};