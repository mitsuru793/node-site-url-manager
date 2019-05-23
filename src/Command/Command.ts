import Store from "../Store"

export default abstract class Command {
  protected store: Store

  constructor() {
    this.store = Store.load()
  }
}

