/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */
const mnemonic = require('./config').env.MNEMONIC;
const HDWalletProvider = require("truffle-hdwallet-provider");
const infura_apikey = "XXXXXX";

module.exports = {
  networks: {
    localhost: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: ()=>new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/4afd8008773a450586d22a5b87988bf7"),
      network_id: 3,
      gas: 3000000,
      gasPrice: 10000000000,
    }
  }
};
