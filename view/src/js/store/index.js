import { observable } from "mobx"
class FileStore{
  @observable files = []
}
const fileStore = new FileStore()
export default fileStore;