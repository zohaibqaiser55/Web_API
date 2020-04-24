import express from 'express'
import {userRouter} from './resources/users/user.router'
import { pathToFileURL } from 'url'
import { publicDecrypt } from 'crypto'
export const router = express.Router()

//basic page
router.get('/', (req, res) => res.send('Home page'))
router.get('/about', (req, res) => res.send('About Page'))

//sign in
router.get('/signin', (req, res) => res.send('Sign In'))
//sign up 
router.post('/signup',(req, res) => {
    let email = req.body.email
    let password = req.body.password

    const user = {email, password}
    res.send(user)
})

router.use('/users', userRouter)