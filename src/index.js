const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT | 5000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', router)

app.listen(PORT, (error) => {
    if(!error) console.log(`listen server on port ${PORT}`)
    else {
        console.error(error)
        process.exit()
    }
})
