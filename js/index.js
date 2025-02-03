const listContainer = document.querySelector("section");
fetch(`https://kea-alt-del.dk/t7/api/categories/`)
  .then((response) => response.json())
  .then(showCategories);

function showCategories(categories) {
  const markup = categories
    .map(
      (category) => `
  <article>
  <a href="produktliste.html?category=${category.category}">${category.category}</a>
  </article>
  `
    )

    .join("");

  console.log(markup);

  listContainer.innerHTML = markup;
}
