const truncate = require('./utils/truncate')

beforeAll((done) => {
  truncate().then(() => {
    done()
  })
})
