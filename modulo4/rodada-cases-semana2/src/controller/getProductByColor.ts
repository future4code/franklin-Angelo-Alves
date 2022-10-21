import { Request, Response } from "express"
import connection from "../database/connection"

export const getProductByColor = async (req: Request, res: Response) => {
  const color = req.params.color
  const result = await connection.select('*').from('products').where({ color })
  res.status(200).send(result)
}