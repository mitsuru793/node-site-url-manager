import Command from "./Command"

export class AddCommand extends Command {
  run(url: string, title: string) {
    const key = url.replace('.', '\\.')
    this.store.add(`links.${key}`, {url, title})
    this.store.save()
  }
}

