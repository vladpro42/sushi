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


document.addEventListener("DOMContentLoaded", () => {
    const profilePopup = document.querySelector(".profile-popup");
    const headerProfile = document.querySelector(".header__profile");
    const profilePopupBnsClose = document.querySelector(".profile-popup__bns-close");
    const profilePopupBtn = document.querySelector(".profile-popup__btn");

    headerProfile.addEventListener('click', event => {
        console.log(event)
        event.preventDefault();
        if (profilePopup.classList.contains("active")) {
            profilePopup.classList.remove("active");
            profilePopup.classList.add("hide");
            return;
        }
        profilePopup.classList.add("active");
        profilePopup.classList.remove("hide");

    })

    profilePopupBnsClose.addEventListener('click', () => {
        profilePopup.classList.remove("active");
        profilePopup.classList.add("hide");
    })

    profilePopupBtn.addEventListener('click', () => {
        profilePopup.classList.remove("active");
        profilePopup.classList.add("hide");
    })

})


document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const menuMobile = document.querySelector(".menu-mobile");
    const btnClose = menuMobile.querySelector(".btn-close");

    burger.addEventListener("click", (event) => {
        menuMobile.classList.toggle("active");

        btnClose.addEventListener("click", event => {
            menuMobile.classList.remove("active");
        })
    })
})