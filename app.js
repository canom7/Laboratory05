const carrito = [
    {
        id: 198752,
        name: "Tinta DJ27 Color",
        price: 52.95,
        count: 3,
        premium: true
    },
    {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 32.75,
        count: 2,
        premium: true
    },
    {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5.95,
        count: 3,
        premium: false
    },
    {
        id: 3143,
        name: "Caja de folios DIN-A4 80gr",
        price: 9.95,
        count: 2,
        premium: false
    }
];

//MOSTRAR EL CARRITO DE LA COMPRA - TODOS LOS PRODUCTOS
console.log("LIST OF PRODUCTS IN THE SHOPPING CART")

function printArticle(product){
    for (attr in product){
        console.log(attr + ": " + product[attr]);
    }
    console.log("*******************");
}

for (product of carrito){
    printArticle(product);
}


//CALCULAR EL TOTAL DEL CARRITO DE LA COMPRA
console.log("");
console.log("");
console.log("CALCULATE TOTAL PRICE");

let total = 0;
for ( product of carrito){
    total = total + (product.price * product.count)
}
console.log("total price is: " + total);

//FILTRAR POR LOS PRODUCTOS PREMIUM
console.log("");
console.log("");
console.log("LIST OF PREMIUM PRODUCTS");

for(product of carrito){
    if (product.premium) printArticle(product);
}

//MENSAJE SI TODOS LOS PRODUCTOS SON PREMIUM
console.log("");
console.log("");
console.log("MESSAGE IF ALL PRODUCTS ARE PREMIUM / ARE NOT PREMIUM");
var noPremium = 0;
for(product of carrito){
    if (product.premium == false){
        noPremium++;
    }
}
if (noPremium > 0){
    console.log("Este pedido tiene gastos de envío");
}else{
    console.log("Pedido sin gastos de envío");
}

//APLICAR DESCUENTO DE 5% SI LA COMPRA ES MAYOR A 100€
console.log("");
console.log("");
console.log("IF PRICE IS HIGER THAN 100€, APPLY 5% DISCOUNT");
if (total <= 100){
    console.log("Total price without discount: " + total);
}else{
    total = total - (total * 0.05);
    console.log("Total price with discount: " + total);
}

//MOSTRAR ARRAY EN HTML
var list = "";
    for (product of carrito){
        list = list + '<li>'+ "ID: " + product.id + ", name: " + product.name + ", price: " + product.price + ", count: " + product.count + ", price: " + product.premium + '</li>'
    }
  
  document.getElementById("list").innerHTML = list;


//ELIMINAR EL PRODUCTO CON ID 54657 DEL CARRITO DE LA COMPRA
console.log("");
console.log("");
console.log("LIST OF PRODUCTS IN THE SHOPPING CART AFTER DELETE PRODUCT WITH ID 54657");

for (i = 0; i < carrito.length; i++){
    if (carrito[i].id === 54657){
        carrito.splice(i , 1)
    }   
}

for (article of carrito){
    printArticle(article);
}



