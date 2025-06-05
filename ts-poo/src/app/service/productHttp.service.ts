import { UpdateProductDto, CreateProductDto } from "../dto/product.dto";
import { Product } from "../models/product.model";
//import { ProductService } from "../models/productService.interface";
import axios from 'axios';

export class ProductHttpService  {
  private baseUrl: string = 'https://api.escuelajs.co/api/v1/products';
  private static instance: ProductHttpService | null = null;

  async getAll()  {
    const {data}= await axios.get<Product[]>(this.baseUrl)
    return data;
  }
  async update(id: Product['id'], product: UpdateProductDto){
    const {data} = await axios.put(`${this.baseUrl}/${id}`, product);
    return data;
  }
  async create(product: CreateProductDto) {
    const {data} = await axios.post<Product>(this.baseUrl, product);
    return data;
  }

  async findById(id: number){
    const {data} = await axios.get<Product>(`${this.baseUrl}/${id}`);
    return data;
  }

  static build(){
    if (!this.instance) {
      this.instance = new ProductHttpService();
    }
    return this.instance;
  }

  

 
}