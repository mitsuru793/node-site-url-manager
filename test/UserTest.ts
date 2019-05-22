import { assert } from 'chai'
import User from 'User'

describe('User', () => {
  describe('constructor', () => {
    it('can do', () => {
      const user = new User()
      assert.instanceOf(user, User)
    })
  })
})
