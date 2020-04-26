import express from 'express'
import userController from './user.controller'
export const userRouter = express.Router()

/**Routes for Crude fuctionality */
userRouter.route('/')
.get(userController.getUser)
.post(userController.createUser)

userRouter.route('/:id')
.delete(userController.deleteUser)
.put(userController.updateUser)
.delete(userController.deleteUser)


