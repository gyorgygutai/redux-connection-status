import { expect } from 'chai'
import reduce, { initialState } from '../../src/reducer'
import { setInitialConnectionStatus, connectionStatusChanged } from '../../src/actions'

describe('reducer', () => {
  it('should return the initialState', () => {
    expect(reduce(undefined, {})).to.be.equal(initialState)
  })

  describe('action setInitialConnectionStatus', () => {
    it('should set isOnline to true', () => {
      expect(
        reduce(initialState, setInitialConnectionStatus(true)).isOnline
      ).to.be.true
    })

    it('should set isOnline to false', () => {
      expect(
        reduce(initialState, setInitialConnectionStatus(false)).isOnline
      ).to.be.false
    })
  })

  describe('action connectionStatusChanged', () => {
    it('should set isOnline to true', () => {
      expect(
        reduce(initialState, connectionStatusChanged(true)).isOnline
      ).to.be.true
    })

    it('should set isOnline to false', () => {
      expect(
        reduce(initialState, connectionStatusChanged(false)).isOnline
      ).to.be.false
    })
  })
})
