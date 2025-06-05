import { ProductMemoryService } from "./service/productMemory.service";

const productService = new ProductMemoryService();
productService.create({
    title: "Product 1",
    price: 100,
    description: "Description of Product 1",
    categoryId: 1,
    images: ["https://example.com/image1.jpg"],
    slug: "product-1",
});

console.log("All Products:", productService.getAll());