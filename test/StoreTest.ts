import {assert} from 'chai'
import Store from "../src/Store"

describe('Store', () => {
  describe('add', () => {
    it('adds a value into deep path', () => {
      const store = new Store({a: {b: []}})
      const added = store.add('a.b', 1)
      assert.deepEqual([1], added.get('a.b'))
    })

    it('adds a value into undefined path', () => {
      const store = new Store({})
      const added = store.add('a.b', 1)
      assert.deepEqual(1, added.get('a.b'))
    })

    it('pushes a value into array of element', () => {
      const store = new Store({
        ids: [1]
      })
      const added = store.add('ids', 2)
      assert.deepEqual([1, 2], added.get('ids'))
    })

    it('replaces scalar with value', () => {
      const store = new Store({
        user: {
          id: 1,
        }
      })

      const added = store.add('user.id', 2)
      assert.equal(2, added.get('user.id'))
    })
  })
})
