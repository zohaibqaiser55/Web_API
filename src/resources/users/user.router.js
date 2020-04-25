import express from 'express'
import userController from './user.controller'
export const userRouter = express.Router()

/**Routes for Crude fuctionality */
userRouter.route('/')
.get(userController.getUsers)
.post(userController.createUser)

userRouter.get('/:id')
.put(userController.updateUsers)


