import { CategoryCrudService } from "./service/categoryCrud.service";
import { ProductCrudService } from "./service/productCrud.service";

(async () => {
    const productService = new ProductCrudService();
    console.log("Fetching all products...");
    const products = await productService.getAll();
    console.log("All Products:", products.length);
    productService.close();

    const categoryService = new CategoryCrudService();
    console.log("Fetching all categories...");
    const categories = await categoryService.getAll();
    console.log("All Categories:", categories.length);
    categoryService.close();

})()

