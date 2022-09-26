import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import UserController from './controller/UserController'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3000, () => {
    console.log(`server on ${process.env.PORT || 3000} port`)
})


const userController = new UserController()

app.get("/healthcheck", userController.healthcheck)

app.post("/users/signup", userController.signup)

app.post("/users/login", userController.login)

app.get("/users/all", userController.listusers)

app.delete("/users/:id", userController.deleteuser)
