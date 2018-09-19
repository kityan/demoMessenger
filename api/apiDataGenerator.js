const apiDataParts = require('./apiDataParts')
const uuid = require('uuid/v1')
const usersQty = 20
const jdenticon = require("jdenticon")

function generateIcon() {
  const size = 100
  const value = Math.random()
  const png = jdenticon.toPng(value, size)
  return png.toString('base64')
}

function getRandomValueFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function generate() {
  const data = []
  for (let i = 0; i < usersQty; i++) {
    const userName = getRandomValueFromArray(apiDataParts.names)
    const messages = getRandomValueFromArray(apiDataParts.messages).map(message => {
      const { isFrom = false, text } = message
      return {
        id: uuid(),
        dt: new Date(),
        text: isFrom ? text : text + ', ' + userName,
        isFrom
      }
    })
    data.push({
      id: uuid(),
      name: userName,
      lastname: getRandomValueFromArray(apiDataParts.lastnames),
      age: 20 + Math.floor(Math.random() * 30),
      city: getRandomValueFromArray(apiDataParts.cities),
      messages,
      info: 'Случаное число для информации о себе: ' + Math.ceil(Math.random() * 10e5),
      avatar: generateIcon(),
    })
  }
  return data
}

module.exports = generate
