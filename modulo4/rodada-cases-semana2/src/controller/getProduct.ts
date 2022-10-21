import connection from '../database/connection'
import { Request, Response } from "express";

export const getProduct = async (req: Request, res: Response) => {
  const result = await connection.select('*').from('products')
  res.status(200).send(result)
}
