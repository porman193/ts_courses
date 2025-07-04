

(()=> {
  const myCart = [];
  const products: string | any[] = [];
  const limit = 2;

  async function getProducts() {
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      method: 'GET'
    });
    const data = await rta.json();
    products.concat(data);
  }

  function getTotal() {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].price;
    }
    return total;
  }

  function addProduct(index: number) {
    if (getTotal() <= limit) {
      myCart.push(products[index]);
    }
  }

  getProducts();
  addProduct(1);
  addProduct(2);
  const total = getTotal();
  console.log(total);

});