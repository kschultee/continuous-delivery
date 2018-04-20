const express = require('express')
module.exports = function createApp() {

const app = express()

app.get('/', (req, res) => {
  res.json({
    repoName: 'continuous-delivery',
    repoDes: 'A practice repository for testing and deployment.'
  })
})

return app
}
