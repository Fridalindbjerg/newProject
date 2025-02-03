let listContainer = document.querySelector(".listcontainer");
fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then(showList);

function showList(data) {
  const markup = data
    .map(
      (product) =>
        `<article>
      <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="" />
      <h3>${product.productdisplayname}</h3>
      <h4>${product.articletype} &#124; ${product.brandname}</h4>
      <div>
        <h5>DKK ${product.price},-</h5>
        <p>${product.discount}</p>
      </div>
      <a href="produkt.html">Read more</a>
   </article>`
    )
    .join("");

  console.log(markup);

  listContainer.innerHTML = markup;
}
