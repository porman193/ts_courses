import axios from 'axios';
import { Product } from './models/product.model';

(async()=>{
 
    async function getProducts():Promise<Product[]>{
        const promise = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
        return promise.data;
    }

    const products = await getProducts();
    console.log(products); // Array of products from the API
})()