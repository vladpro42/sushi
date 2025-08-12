const cart = document.querySelector(".cart");
const headertCart = document.querySelector(".header__cart");
const bg = document.querySelector(".bg");
const cartClose = document.querySelector(".cart__close");

if (headertCart) {
  headertCart.addEventListener("click", (event) => {
    cart.classList.add("open");
    bg.classList.add("active");
  });
}

if (cartClose) {
  cartClose.addEventListener("click", (event) => {
    if (cart.classList.contains("open")) {
      cart.classList.remove("open");
      if (!bg.classList.contains("active")) return;
      bg.classList.remove("active");
    }
  });
}

if (bg) {
  bg.addEventListener("click", (event) => {
    if (event.currentTarget.classList.contains("active")) {
      event.currentTarget.classList.remove("active");

      if (cart.classList.contains("open")) {
        cart.classList.remove("open");
      }
    }
  });
}
