import { addOrder } from "../Controllers/OrderControllers.js";

import express from 'express'

const orderRouter = express.Router()

orderRouter.post('/', addOrder)

export default orderRouter