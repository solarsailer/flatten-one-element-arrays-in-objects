'use strict'

// -------------------------------------------------------------
// Module.
// -------------------------------------------------------------

// Flatten all one-element arrays in an object, recursively.
//
// Example: {'test': ['val']} => {'test': 'val'}
function flatten (obj) {
  if (typeof obj !== 'object') return obj

  const keys = Object.keys(obj)

  if (keys.length === 0) return obj

  for (const k of keys) {
    const val = flatten(obj[k])

    if (Array.isArray(val) && val.length === 1) {
      obj[k] = val[0]
    }
  }

  return obj
}

// -------------------------------------------------------------
// Exports.
// -------------------------------------------------------------

module.exports = flatten
