import express from 'express'
const app = express()

app.get('/', (req, res) => res.send('it works ig yaay'))
app.listen(8080, () => console.log('service is running'))
