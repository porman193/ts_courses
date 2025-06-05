import { CreateProductDto, UpdateProductDto } from '../dto/product.dto';
import { Product } from './product.model';

export interface Service<T>{
    getAll(): T[] | Promise<T[]>;
    update<ID,DTO>(id:ID, element: DTO): T|Promise<T|null>|null;
    create<DTO>(element: DTO): T |Promise<T>;
    findById<ID>(id: ID): T | Promise<T|undefined> | undefined|null;
}