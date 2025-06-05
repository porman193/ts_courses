import { CreateProductDto, UpdateProductDto } from "../dto/product.dto";
import { Product } from "../models/product.model";
import { BaseHttpService } from "./baseHttp.service";

export class ProductCrudService {
    private baseUrl: string = 'https://api.escuelajs.co/api/v1/products';
    private http = BaseHttpService.build<Product>(this.baseUrl);

    async getAll(): Promise<Product[]> {
        return this.http.getAll();
    }

    async findById(id: number): Promise<Product | undefined> {
        return this.http.findById(id);
    }

    async update(id: Product['id'], product: UpdateProductDto): Promise<Product> {
        return this.http.update(id, product);
    }

    async create(product: CreateProductDto): Promise<Product> {
        return this.http.create(product);
    }

    close() {
        this.http.close();
    }
}