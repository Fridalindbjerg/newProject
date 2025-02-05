const productId = new URLSearchParams(window.location.search).get("id");
let productContainer = document.querySelector(".productcon");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
         <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="" />
      <article>
        <div>
          <h2>${data.productdisplayname}</h2>
          <h4>${data.articletype} &#124; ${data.brandname}</h4>
          <h3>Product information</h3>
          <p>${data.styledesc}</p>
          <h5>Inventory number</h5>
          <p>${data.id}</p>
          <div>
          <h5 class="${data.discount && "overWrite"}">${data.price},-</h5>
          ${data.discount > 0 ? `<span class="SaleLabel ">-${data.discount}%</span>` : ""}
          ${data.discount > 0 ? `<h5>Now: ${data.price - data.discount},-</h5>` : ""}
          </div>
        </div>
        <form action="/submit" method="post">
          <label for="size">Choose your size:</label>
          <select id="size" name="size">
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">X-Large</option>
            <option value="XXL">XX-Large</option>
          </select>
  
          <button type="submit">Add to basket</button>
        </form>
      </article>`;
  });
