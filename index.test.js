'use strict'

const flatten = require('./index')

// -------------------------------------------------------------
// Tests.
// -------------------------------------------------------------

describe('flatten()', () => {
  it('with number', () => {
    const t = flatten(0)
    expect(t).toEqual(0)
  })

  it('with boolean', () => {
    const t = flatten(true)
    expect(t).toEqual(true)
  })

  it('with string', () => {
    const t = flatten('test')
    expect(t).toEqual('test')
  })

  it('with empty array', () => {
    const t = flatten([])
    expect(t).toEqual([])
  })

  it('with an array with 1 element', () => {
    const t = flatten(['test'])
    expect(t).toEqual(['test'])
  })

  it('with an array with 1 element', () => {
    const t = flatten(['test', 'test'])
    expect(t).toEqual(['test', 'test'])
  })

  it('with an empty object', () => {
    const t = flatten({})
    expect(t).toEqual({})
  })

  it('with an object', () => {
    const t = flatten({'test': 'val'})
    expect(t).toEqual({'test': 'val'})
  })

  it('test 0', () => {
    const t = flatten({'test': ['val']})
    expect(t).toEqual({'test': 'val'})
  })

  it('test 1', () => {
    const t = flatten({'test': {'test': 'val'}})
    expect(t).toEqual({'test': {'test': 'val'}})
  })

  it('test 2', () => {
    const t = flatten({'test': {'test': ['val']}})
    expect(t).toEqual({'test': {'test': 'val'}})
  })

  it('test 3', () => {
    const t = flatten({'test': ['val1', 'val2']})
    expect(t).toEqual({'test': ['val1', 'val2']})
  })

  it('test 4', () => {
    const t = flatten({'test': [{'test': ['val1', 'val2']}], 'bar': ['val']})
    expect(t).toEqual({'test': {'test': ['val1', 'val2']}, 'bar': 'val'})
  })

  it('test 5', () => {
    const t = flatten({'test': [{'test': ['val1', 'val2']}], 'foo': ['val'], 'bar': {'test': 'val'}})
    expect(t).toEqual({'test': {'test': ['val1', 'val2']}, 'foo': 'val', 'bar': {'test': 'val'}})
  })

  it('test 6', () => {
    const t = flatten({'test': [{'test': ['val']}], 'foo': ['val']})
    expect(t).toEqual({'test': {'test': 'val'}, 'foo': 'val'})
  })
})
