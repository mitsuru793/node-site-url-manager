import meow from 'meow'
import App from "./App"

const cli = meow(`
  Help Message
`, {
  flags: {
  },
  autoHelp: false
})

const app = new App()
app.run(cli.input, cli.flags)
