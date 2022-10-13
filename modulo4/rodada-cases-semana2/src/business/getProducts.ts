import { Search } from "../services/searchProduct";
import { Request, Response } from "express";
export class x {
    constructor(
        public search: Search
    ) { }
    get = async (req: Request, res: Response) => {
        const response = await this.search.searchProduct()
        res.send(response)
    }
}
