const express = require('express')
const routes = require('./routes')
const db = require('./db/index')
const logger = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use('/', routes)
app.use(express.static(`${__dirname}/client/build`))

db.on('error', console.error.bind(console, 'MongoDB Connection Error:'))

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
