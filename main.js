let productName = document.querySelector("#productName");
let productPrice = document.querySelector("#productPrice");
let productCategory = document.querySelector("#productCategory");
let productDesc = document.querySelector("#productDesc");
let productArray = [];

document.querySelector(".add-product").onclick = function () {

addProduct()

};

function addProduct() {
  let product = {
    name: productName.value,
    price: productPrice.value,
    category: productCategory.value,
    desc: productDesc.value,
  };
   productArray.push(product);
   showProducts();
   clearInputs();
}

function showProducts(){
    let p = '';

    for(let i = 0 ; i < productArray.length ; i++){
        p += ` 
        
        <tr>
                <td>${i}</td>
                <td>${productArray[i].name}</td>
                <td>${productArray[i].price}</td>
                <td>${productArray[i].category}</td>
                <td>${productArray[i].desc}</td>
                <td><button class="delete" onclick = 'deleteProducts(${i})'>Delete</button></td>
            </tr>

        `
        document.querySelector("tbody").innerHTML = p;
    }
}

function clearInputs(){
    productName.value = '';
    productPrice.value = '';
    productCategory.value = '';
    productDesc.value = '';
}

function deleteProducts(deleteElement){
    console.log(deleteElement);
    productArray.splice(deleteElement , 1);
    showProducts();
}

