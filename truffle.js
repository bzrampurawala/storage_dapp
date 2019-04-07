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
const env = require('./config').env;
const mnemonic = env.MNEMONIC;
const HDWalletProvider = require("truffle-hdwallet-provider");
const infura_apikey = env.INFURA_APIKEY;
const default_account = env.DEFAULT_ACCOUNT;
module.exports = {
  networks: {
    localhost: {
      host: "localhost",
      port: 7545,
      gas: 4712388,
      gasPrice: 100000000000,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: ()=>new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/"+infura_apikey),
      network_id: 3,
      gas: 4712388,
      gasPrice: 100000000000,
      from: default_account,
    }
  }
};