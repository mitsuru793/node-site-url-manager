import open from 'open'
import Command from "./Command"
import {ILink} from "../Link"

export default class OpenCommand extends Command {
  run(title: string) {
    const links: ILink[] = Object.values(this.store.get('links'))
    const found = links.find(link => !!link.title.match(title))
    if (!found) {
      console.log('Not match link...')
      return
    }
    open(found.url)
  }
}
