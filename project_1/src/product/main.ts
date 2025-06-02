import {addProduct,calcStock,products} from './product.service';

addProduct({id:1,name:"Product 1",price:100,stock:10});
addProduct({id:2,name:"Product 2",price:200,stock:20});
console.log("Products:", products);
console.log("Total Stock:", calcStock(products));