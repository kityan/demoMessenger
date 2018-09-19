const
  express = require('express'),
  app = express(),
  router = express.Router(),
  generateApiData = require('./apiDataGenerator'),
  bodyParser = require('body-parser')

const data = generateApiData()

app.use(bodyParser.json())

app.use(function (req, res, next) {
  res.set('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT')
  res.set('Access-Control-Allow-Headers', 'Content-Type')
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Credentials', true)
  next()
})


app.use('/api', router)
require('http').createServer(app).listen(12345)

router.get('/users', (req, res) => {
  res.json(data.map(item => {
    const { id, name, lastname, avatar, city } = item
    return { id, name, lastname, avatar, city }
  }))
})

router.get('/user/:userId', (req, res) => {
  const found = data.filter(item => item.id === req.params.userId)
  if (found.length) {
    const { id, name, lastname, avatar, city, age, info } = found[0]
    res.json({ id, name, lastname, avatar, city, age, info })
  } else {
    res.sendStatus(404)
  }
})

router.get('/user/:userId/messages', (req, res) => {
  const found = data.filter(item => item.id === req.params.userId)
  if (found.length) {
    const { messages } = found[0]
    res.json(messages)
  } else {
    res.sendStatus(404)
  }
})

router.post('/user/:userId/messages', (req, res) => {
  const found = data.filter(item => item.id === req.params.userId)
  if (found.length) {
    const { messages } = found[0]
    const { id, dt, text, isFrom } = req.body
    messages.push({
      id,
      text,
      isFrom,
      dt: new Date(dt)
    })
    res.json({})
  } else {
    res.sendStatus(404)
  }
})

