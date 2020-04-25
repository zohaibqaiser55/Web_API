import express from 'express'
import userController from './user.controller'
export const userRouter = express.Router()

/**Routes for Crude fuctionality */
userRoute
.route('/')
.get(userController.getUsers)
.post(userController.createUser)

userRouter.get('/:id', (req, res) => {
    res.send('User id is:'+ req.params.id)
})