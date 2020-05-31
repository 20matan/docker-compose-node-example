const express = require('express')

const app = express()

app.use((req, res) => {
  console.log('req url = ', req.url)
  res.send('ok')
})

app.listen(8001, () => {
  console.log('app is listening on port 8001')
})
