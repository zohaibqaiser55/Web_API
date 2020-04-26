//connecting to online database

import mongoose from 'mongoose'

export const dbConnect = () => {
  return mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('Online DataBase is Ready'))
    .catch((error) =>
      console.log(
        'Error occured, During Connecting to DataBase. Pls check the database.js File' +
          error
      )
    )
}
