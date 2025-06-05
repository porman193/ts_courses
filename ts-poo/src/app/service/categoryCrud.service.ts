import { CreateCategoryDto, UpdateCategoryDto } from "../dto/category.dto";
import { Category } from "../models/category.model";
import { BaseHttpService } from "./baseHttp.service";

export class CategoryCrudService {
    private baseUrl: string = 'https://api.escuelajs.co/api/v1/categories';
    private http = BaseHttpService.build<Category>(this.baseUrl);

    async getAll(): Promise<Category[]> {
        return this.http.getAll();
    }

    async findById(id: number): Promise<Category | undefined> {
        return this.http.findById(id);
    }

    async update(id: Category['id'], category: UpdateCategoryDto): Promise<Category> {
        return this.http.update(id, category);
    }

    async create(category: CreateCategoryDto): Promise<Category> {
        return this.http.create(category);
    }

    close() {
        this.http.close();
    }
 
}