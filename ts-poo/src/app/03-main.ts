import { Product } from "./models/product.model";
import { ProductHttpService } from "./service/productHttp.service";

(async () => {
    const productService = ProductHttpService.build();

    console.log("Fetching all products...");
    const products = await productService.getAll(); 

    const productId = products[0].id;
    productService.update(productId, {
        title: "Updated Product",
        price: 200
    });
    console.log(`Updated product with ID ${productId}`);
    const updatedProduct = await productService.findById(productId);
    console.log("Updated Product:", updatedProduct);
})()

