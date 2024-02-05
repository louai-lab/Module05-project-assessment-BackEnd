import { getAllProducts , createProduct , getProduct , updateProduct , deleteProduct } from "../Controllers/ProductControllers.js";
import express from 'express'
import upload from "../middleware/Multer.js";
import { auth } from "../middleware/Auth.js";

const productRouter = express.Router();

productRouter.get('/' , getAllProducts)
productRouter.post('/', auth , upload.single('image') , createProduct)
productRouter.get('/product/:id',getProduct)
productRouter.patch('/product/:id', auth , upload.single('image') ,updateProduct)
productRouter.delete('/product/:id', auth , upload.single('image'),deleteProduct)




export default productRouter