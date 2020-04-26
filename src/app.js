import express from 'express'
import bodyParser from 'body-parser'
import {dbConnect} from './database'
import {router} from './router'

const app = express()

dbConnect()
app.use(bodyParser.json()) //read jason
app.use(bodyParser.urlencoded({extended: true})) //read URLs

app.use('/', router)
app.listen(3000, () => console.log('service is running'))
