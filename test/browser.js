'use strict'

const chai = require('chai')
chai.use(require('dirty-chai'))
const expect = chai.expect

describe('main', () => {
  it('should be able to test', done => {
    expect({}).to.exist()
    done()
  })
})
