let listContainer = document.querySelector(".listcontainer");
const mycategory = new URLSearchParams(window.location.search).get("category");

fetch(`https://kea-alt-del.dk/t7/api/products/?category=${mycategory}`)
  .then((response) => response.json())
  .then(showList);

function showList(data) {
  const markup = data
    .map(
      (product) =>
        `<article class=" ${product.soldout && "udsolgt"}"  >
      <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="" /> 
      <h3>${product.productdisplayname}</h3>
      <h4>${product.articletype} &#124; ${product.brandname}</h4>
      <div>
        <h5 class="${product.discount && "overWrite"}">${product.price},-</h5>
        
        ${product.discount > 0 ? `<span class="SaleLabel">-${product.discount}%</span>` : ""}
        ${product.discount > 0 ? `<h5>Now: ${product.price - product.discount},-</h5>` : ""}
        
        
      </div>
      <a href="produkt.html?id=${product.id}">Read more</a>
   </article>`
    )
    .join("");

  console.log(markup);

  listContainer.innerHTML = markup;
}

document.querySelector(".listcontainer").innerHTML = mycategory;
