const createApp = require('./create-app')

const app = createApp()

app.listen(process.env.PORT, () => {
  console.log('listening on port 3000')
})
