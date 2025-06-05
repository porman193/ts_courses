import axios from 'axios';

(async()=>{
    function delay(time:number){
        const promise = new Promise<boolean>((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, time);
        });
        return promise;
    }

    async function getProducts(){
        const promise = await axios.get('https://api.escuelajs.co/api/v1/products');
        return promise.data;
    }

    const result = await delay(2000);
    console.log(result); // true, after 2 seconds

    const products = await getProducts();
    console.log(products); // Array of products from the API
})()