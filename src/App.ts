import {AddCommand} from "./Command/AddCommand"

export default class App {
  run(inputs: string[], flags: { [name: string]: any }) {
    const command = inputs[0]
    inputs = inputs.slice(1)

    if (!command) {
      throw new Error('Require command.')
    }

    switch (command) {
      case 'add':
        (new AddCommand()).run(inputs[0], inputs.slice(1).join(' '))
        break
      default:
        throw new Error(`Not found a command: ${command}`)
    }
  }
}
