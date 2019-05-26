import open from 'open'
import Command from "./Command"
import {ILink} from "../Link"
import {IAlias} from "../Alias"

export default class OpenCommand extends Command {
  run(title: string) {
    const links: ILink[] = Object.values(this.store.get('links'))

    const aliases: IAlias[] = Object.values(this.store.get('aliases'))
    const alias = aliases.find(alias => !!alias.pattern.match(title))
    if (alias) {
      title = alias.expand
    }

    const found = links.find(link => !!link.title.match(title))
    if (!found) {
      console.log('Not match link...')
      return
    }
    open(found.url)
  }
}
