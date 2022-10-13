import { baseDatabase } from "../database/baseDatabase";
export class Search extends baseDatabase {
    searchProduct = async () => {
        return await baseDatabase.connection('products').select('name')
    }
}