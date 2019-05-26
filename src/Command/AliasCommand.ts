import Command from "./Command"

export default class AliasCommand extends Command {
  run(pattern: string, expand: string) {
    const key = pattern.replace('.', '\\.')
    this.store.add(`aliases.${key}`, {pattern, expand})
    this.store.save()
  }
}
