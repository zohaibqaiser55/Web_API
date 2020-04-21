import express from 'express'
const app = express()

app.get('/',(req, res) => res.send('it works ig'))
app.listen(8080, () => console.log('service is running'))