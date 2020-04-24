import express from 'express'
const app = express()
import {dbConnect} from './database'

dbConnect()

app.get('/', (req, res) => res.send('it works ig yaay'))
app.listen(8080, () => console.log('service is running'))
