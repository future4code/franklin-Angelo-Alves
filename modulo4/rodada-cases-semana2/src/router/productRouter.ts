import { x } from "../business/getProducts";
import { Search } from "../services/searchProduct";
import { Router } from "express";

export const productRouter = Router()

const getBusiness = new x(
    new Search()
)

productRouter.get('/', getBusiness.get)
