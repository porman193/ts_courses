import axios from "axios";
import { Service } from "../models/Service.interface";

export class BaseHttpService<T> implements Service<T> {

    private static instance: BaseHttpService<any> | null = null;

    private constructor(private baseUrl: string) {

    }

    static build<C>(baseUrl: string): BaseHttpService<C> {
        if (!this.instance) {
            this.instance = new BaseHttpService<C>(baseUrl);
        }
        return this.instance;
    }

    async create<DTO>(element: DTO): Promise<T> {
        const {data} = await axios.post<T>(this.baseUrl, element);
        return data;
    }
    async findById<ID>(id: ID):Promise<T|undefined>{
        const {data} = await axios.get<T>(`${this.baseUrl}/${id}`);
        return data;
    }

    async getAll(): Promise<T[]> {
        const {data}= await axios.get<T[]>(this.baseUrl)
        return data;
    }

    async update<ID,DTO>(id: ID, element: DTO): Promise<T> {
        const {data} = await axios.put(`${this.baseUrl}/${id}`, element);
        return data;
    }

    close():void{
        if(BaseHttpService.instance) {
            BaseHttpService.instance = null;
        }
    }

}


