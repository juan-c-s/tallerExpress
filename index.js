const express = require('express')
const app = express()
const port = 80
const wordController = require('./controllers/wordController')
app.use(express.json());

app.get('/', wordController.getRandomWord)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
