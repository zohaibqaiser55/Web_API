import mongoose from 'mongoose'

 export const dbConnect = () => {
     return mongoose.connect(process.env.MONGO_URL)
     .then(() => console.log('its working i know!'))
     .catch(error => console.log('not working whyyyyy'))
 }