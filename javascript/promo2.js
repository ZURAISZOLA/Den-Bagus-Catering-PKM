function toggleMenu() {
  const navbarLinks = document.querySelector(".navbar-links");
  navbarLinks.classList.toggle("active");
}

function addToCart(itemName) {
  const cartItems = document.getElementById("cart-items");
  const listItem = document.createElement("li");
  listItem.textContent = itemName;
  cartItems.appendChild(listItem);
}
