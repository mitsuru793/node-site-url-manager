export interface ILink {
  readonly url: string
  readonly title: string
}
export default class Link implements ILink {
  readonly url: string
  readonly title: string

  constructor(url: string, title: string) {
    this.url = url
    this.title = title
  }
}
