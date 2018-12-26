require('dotenv').config();
module.exports = {
    env:{
        PORT: process.env.PORT,
        MNEMONIC: process.env.MNEMONIC,
        INFURA_APIKEY: process.env.INFURA_APIKEY,
        DEFAULT_ACCOUNT: process.env.DEFAULT_ACCOUNT,
    },
}