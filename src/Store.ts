import dotProp = require("dot-prop")
import is from "@sindresorhus/is"
import fs from 'fs-extra'

export default class Store {
  static readonly path: string = './links.json'
  private value: object

  constructor(value: object) {
    this.value = value
  }

  static load(): Store {
    let value
    if (fs.existsSync(this.path)) {
      value = fs.readJsonSync(this.path)
    } else {
      value = {}
    }
    return new Store(value)
  }

  get(dotPath: string, defaultValue: any = undefined): any {
    return dotProp.get(this.value, dotPath, defaultValue)
  }

  has(dotPath: string): boolean {
    return dotProp.has(this.value, dotPath)
  }

  add(dotPath: string, addValue: any): Store {
    const value = dotProp.get(this.value, dotPath)
    if (is.array(value)) {
      value.push(addValue)
      dotProp.set(this.value, dotPath, value)
    } else {
      dotProp.set(this.value, dotPath, addValue)
    }

    return this
  }

  save(): Store {
    fs.writeJsonSync(Store.path, this.value)
    return this
  }
}
