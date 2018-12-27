
let store = artifacts.require('./Store.sol');
contract("Store", function(accounts){
    console.log(accounts)
    it("push file", function() {
        return store.deployed().then(instance=>instance.addFile(12345,web3.utils.toHex('burhanuddin'),web3.utils.toHex('burhanuddin'),web3.utils.toHex('burhanuddin rampurawala is great'),21345)).then(data=>{
            console.log(data)
        });
    });
    it("get number of files", function() {
        return store.deployed().then(instance=>instance.numberOfFiles()).then(count=>{
            console.log("the number of data stored",count.words[0]);
        });
    });
      it("get file", function() {
        return store.deployed().then(instance=>instance.getFile(0).then(data=>console.log(data)));
      });
})