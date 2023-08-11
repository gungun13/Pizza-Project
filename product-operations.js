// products CRUD operation
// c-create, r-read, u-update ,d-delete

import Product from '../models/product.js';
import doNetworkCall from './api-client.js';
var products;
    async function readAllProducts(){
    
    try{
        
        const obj = await doNetworkCall();
        const pizzas=obj['Vegetarian'];
        const pizzaArray=pizzas.map(pizza=>{
            const pizzaObject= new Product(pizza.id,
                pizza.name,pizza.menu_description,
                 pizza.price,
                 pizza.assets.product_details_page[0].url);
                 return pizzaObject;
       });
       products=pizzaArray;
       return pizzaArray;
        
    }
    
     catch(err){
         throw err;
     }


}
function search(id){
const currentClickedProductIndex = products.findIndex(i=>i.id==id);
console.log(products);
return currentClickedProductIndex;
}

//pizza.name?pizza.name:"no pizza"
export {search,readAllProducts};

