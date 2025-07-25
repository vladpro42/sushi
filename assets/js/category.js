const btn = document.querySelector(".food__filter-btn");
if (btn) {
  btn.addEventListener("click", (event) => {
    const ingredients = document.querySelector(".food__ingredients");
    if (!ingredients) return;

    ingredients.classList.add("open");

    gsap.to(ingredients, {
      duration: 0.45,
      opacity: 1,
      y: 15,
      ease: "power3.out",
    });
  });
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
