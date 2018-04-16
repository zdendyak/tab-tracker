const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// Routes
require('./routes')(app)

sequelize.sync()
  .then(() => {
    const port = config.port
    app.listen(port, () => {
      console.log('Listening on port ', port)
    })
  })
