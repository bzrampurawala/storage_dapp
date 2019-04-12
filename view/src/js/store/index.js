import { observable } from "mobx"
class FileStore{
  @observable files = []
  @observable account = web3.eth.accounts[0]
}
const fileStore = new FileStore()
export default fileStore;