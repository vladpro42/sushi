const btn = document.querySelector(".food__filter-btn");
if (btn) {
  btn.addEventListener("click", (event) => {
    if (window.innerWidth > 1023) {
      const ingredients = document.querySelector(".food__ingredients");
      if (!ingredients) return;

      ingredients.classList.add("open");

      gsap.to(ingredients, {
        duration: 0.45,
        opacity: 1,
        y: 15,
        ease: "power3.out",
      });
    } else {
      const filterMenuMobile = document.querySelector('.filters-menu__mobile')
      if (filterMenuMobile) {
        filterMenuMobile.classList.add('filters-menu__mobile--active')
      }
    }

  });
}

// filters-menu__close btn-close

const btnCloseFilterMenuClose = document.querySelector('.filters-menu__close')
if (btnCloseFilterMenuClose) {
  btnCloseFilterMenuClose.addEventListener('click', event => {
    const filterMenuMobile = document.querySelector('.filters-menu__mobile')
    if (filterMenuMobile) {
      filterMenuMobile.classList.remove('filters-menu__mobile--active')
    }
  })
}

const closeBtn = document.querySelector(".food__ingredients-btn");

if (closeBtn) {
  closeBtn.addEventListener("click", (event) => {
    const ingredients = document.querySelector(".food__ingredients");
    if (!ingredients) return;

    gsap.to(ingredients, {
      duration: 0.45,
      opacity: 0,
      y: -20,
      ease: "power3.in",
      onComplete: () => {
        ingredients.classList.remove("open");
      },
    });
  });
}

const foodItems = document.querySelectorAll(".food__item");

foodItems.forEach((item, index) => {
  gsap.from(item, {
    duration: 1,
    opacity: 0,
    y: 20,
    delay: index * 0.2,
    ease: "power3.out",
  });
});


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".food__select-box").forEach(filterBtn => {
    filterBtn.addEventListener('click', event => {
      const target = event.currentTarget;
      if (target.classList.contains("active")) {
        target.classList.remove("active");
        target.classList.add("hide");
        return
      }
      target.classList.add("active");
      target.classList.remove("hide");
    })
  })
})