import express from "express";
import { getAllUsers , resgister , login , logout } from "../Controllers/UserControllers.js";

const userRoutes = express.Router()

userRoutes.get('/' , getAllUsers)
userRoutes.post('/register' , resgister)
userRoutes.post('/login',login)
userRoutes.get('/logout',logout)



export default userRoutes