async function Product(){
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const products = data.products;
    
    const result = products.map(function(ele){
        return `
        <div class="products">
        <img src = "${ele.thumbnail}"/>
        <h2>${ele.title}</h2>
        <span>${ele.discountPercentage}</span>
        </div>
        `;

    }).join('');
    document.querySelector(".products").innerHTML = result;

}

Product();