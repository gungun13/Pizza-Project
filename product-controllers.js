// glue b/w view and model
// controller UI I/O

import {search,readAllProducts} from "../services/product-operations.js";
var products;
var index;
var sum=0;
var a;

async function showProducts(){
    products = await readAllProducts();
    products.map((obj1)=>printCards(obj1));
    // for(let obj1 of products){
    //     printCards(obj1);
    // }
    printBasket();
}
showProducts();

function addToCart(id){
 index= search(id);
 insertInBasket(index);
}

function insertInBasket(index){
  if(products[index].isAddedInCart==false){
    products[index].isAddedInCart=true;
    products[index].quantity++;
   p.innerText+= `${products[index].name}-->${products[index].price}-->${products[index].quantity} \n`;
  }
  else{
    products[index].quantity++;
  }
 sum+=parseInt(products[index].price);

 button.style.display="block"; 
 button.innerText=`pay-now ${sum}`;
 button.addEventListener('click',()=>payNow(sum+'00'));
}

function printCards(obj){
    const column=document.querySelector('#column');
    const div = document.createElement('div');
    div.className='card';
    const img = document.createElement('img');
    img.className='card-img-top';
    img.src=`${obj.url}`;
    const div2 = document.createElement('div');
    div2.className='card-body';
    div.style="width: 15rem";
    const h5=document.createElement('h5');
    h5.className='card-title';
    h5.innerText=`${obj.name}`+ ' Rs '+ `${obj.price}`;
    const p = document.createElement('p');
    p.className='card-text';
    p.innerText=`${obj.desc}`;
    a=document.createElement('a');
    a.className='btn btn-primary';
    a.innerText='Add to card';
    a.addEventListener('click',()=>addToCart(obj.id));
    column.appendChild(div);
    div.appendChild(img);
    div.appendChild(div2);
    div2.appendChild(h5);
    div2.appendChild(p);
    div2.appendChild(a);
}

let p;
let button;
function printBasket(){
        const col=document.querySelector('#column2');
        const divcard=document.createElement('div');
        divcard.className='card';
        divcard.style="height: 36rem";
        const divbody=document.createElement('div');
        divbody.className='card-body';
        p=document.createElement('p');
        p.innerText='Pizzas -->   Price --> Quantity\n';
        col.appendChild(divcard);
        divcard.appendChild(divbody);
        divbody.appendChild(p);
        button=document.createElement('button');
        button.type='button';
        button.style.display='none';
        button.className='btn btn-success';
        divcard.appendChild(button);
  
}

