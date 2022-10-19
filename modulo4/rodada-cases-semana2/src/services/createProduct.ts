import { Product } from '../model/product'
import connection from '../database/connection'

export const createProduct = async (name: string, tag: string, url: string, color: string, image: string) => {

    const product = new Product(name, tag, url, color, image)
    console.log('PRODUCT: ', product);

    return await connection('products').insert(
        {
            name: product.name,
            tag: product.tag,
            url: product.url,
            color: product.color,
            image: product.image
        }
    )
}


