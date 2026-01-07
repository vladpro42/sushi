
const productSwitchDog = document.querySelector('.product__switch-dog');

if (productSwitchDog) {
    productSwitchDog.addEventListener('click', event => {
        console.log('click')
        event.currentTarget.classList.toggle('active')
    })
}


const productCompositionBtn = document.querySelector('.product__composition-btn');


const productCompositionList = document.querySelector('.product__composition-list');
let itemWidth;
if (productCompositionList) {
    itemWidth = getComputedStyle(productCompositionList).getPropertyValue('--width-item');

    const childrenCount = productCompositionList.children.length;
    let countOfEvent = 0;
    const defaultView = 5;
    const marginLeft = 8; //px
    if (productCompositionBtn) {
        productCompositionBtn.addEventListener('click', event => {
            countOfEvent++;
            if (countOfEvent <= childrenCount - defaultView) {
                const offsetX = parseInt(itemWidth) * countOfEvent + marginLeft * countOfEvent - 1;
                productCompositionList.style.transform = `translateX(-${offsetX}px)`;
                return
            }
            productCompositionBtn.classList.add('disabled');
            return
        })

    }
}


// const cartBlock = document.querySelector('.cart')

// // if(cartBlock) {
// //
// //     const cartsItems = cartBlock.querySelectorAll('.cart__item')
// //
// //     cartsItems.forEach(item => {
// //         const btnDelete = item.querySelector('.cart__delete')
// //         if(btnDelete)
// //             btnDelete.addEventListener('click', handleDeleteItemFromCart)
// //
// //         const btnIncrement = item.querySelector('.cart-counter__increment')
// //         if(btnIncrement)
// //             btnIncrement.addEventListener('click', handleIncrementButton)
// //
// //         const btnDecrement = item.querySelector('.cart-counter__dec')
// //         if(btnDecrement)
// //             btnDecrement.addEventListener('click', handleDecrementButton)
// //
// //         // const count = document.querySelector('.cart-counter__count')
// //     })
// //
// // }

// // кнопка добавить в корзину
// const addCart = document.querySelectorAll('.food__item-cart')
// addCart.forEach(item => {
//     item.addEventListener('click', handleAddToCart)
// })



// async function handleAddToCart(event) {
//     console.log('handleAddToCart')
//     const productItemBlock = event.currentTarget.closest('.food__item');
//     const productId = productItemBlock.dataset.productid;
//     console.log('Adding product:', productId);
//     // updateCartUI(productId, data.product);
//     try {
//         const response = await fetch('/cart/add', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
//                 'Accept': 'application/json',
//             },
//             body: JSON.stringify({ product_id: productId })
//         });

//         const data = await response.json();
//         if (data.success) {
//             updateCartUI(data.cart, data.total, productId);
//             // showToast('Товар добавлен в корзину');
//         }
//     } catch (error) {
//         console.error('Error adding to cart:', error);
//         // showToast('Ошибка при добавлении в корзину', 'error');
//     }
// }
/*
function updateCartItemTotal(cartCounter, quantity) {
    const cartItem = cartCounter.closest('.cart__item');
    if(!cartItem) return;

    const priceElement = cartItem.querySelector('.cart__item-price');
    if(!priceElement) return;

    // Получаем цену за единицу товара (удаляем " грн" и преобразуем в число)
    const unitPrice = parseFloat(priceElement.innerText.replace(' грн', ''));
    const totalPrice = unitPrice * quantity;
    priceElement.innerText = `${totalPrice} грн`;
}

// Обновление общей суммы корзины
function updateCartTotal() {
    const cartItems = document.querySelectorAll('.cart__item');
    let total = 0;

    cartItems.forEach(item => {
        const priceElement = item.querySelector('.cart__item-price');
        if(priceElement) {
            const price = parseFloat(priceElement.innerText.replace(' грн', ''));
            total += price;
        }
    });

    // Обновляем элемент с общей суммой (добавьте соответствующий элемент в ваш HTML)
    const totalElement = document.querySelector('.cart__total');
    if(totalElement) {
        totalElement.innerText = `${total} грн`;
    }
}*/

// function updateCartUI(cart, totalSum, productId) {
//     const cartList = document.querySelector('.cart__list');
//     if (!cartList) return;
//     // console.log(Object.entries(cart));
//     const data = cart[productId]
//     console.log(data, "data")
//     const existingItem = cartList.querySelector(`.cart__item[data-productid="${data.id}"]`);

//     if (existingItem) {
//         const counter = existingItem.querySelector('.cart-counter__count');
//         if (counter) {
//             let value = parseInt(counter.innerText);
//             value += 1;
//             counter.innerText = value.toString();
//             updateCartItemTotal(existingItem.querySelector('.cart-counter'), value);
//         }
//     } else {
//         console.log(cart)
//         const cartItemHTML = `
//             <div class="cart__item" data-productid="${cart.id}">
//                 <button class="cart__delete">
//                     <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2547 4.2431C13.5172 4.50555 13.5172 4.93106 13.2547 5.19351L5.19022 13.258C4.92777 13.5205 4.50225 13.5205 4.23981 13.258C3.97736 12.9956 3.97736 12.5701 4.23981 12.3076L12.3043 4.2431C12.5668 3.98065 12.9923 3.98065 13.2547 4.2431Z" fill="#1D1D1F"></path>
//                         <path fill-rule="evenodd" clip-rule="evenodd" d="M4.23981 4.2431C4.50225 3.98065 4.92777 3.98065 5.19022 4.2431L13.2547 12.3076C13.5172 12.5701 13.5172 12.9956 13.2547 13.258C12.9923 13.5205 12.5668 13.5205 12.3043 13.258L4.23981 5.19351C3.97736 4.93106 3.97736 4.50555 4.23981 4.2431Z" fill="#1D1D1F"></path>
//                     </svg>
//                 </button>
//                 <div class="cart__item-img">
//                     <img src="${data.image || 'https://bondarev.store/images/product/roll-1.png'}" alt="${data.name}" width="58" height="47">
//                 </div>
//                 <div class="cart__item-description">
//                     <span class="cart__item-title">${data.name}</span>
//                     <span class="cart__item-weigth">Вес: ${data.weight || '40 г'}</span>
//                 </div>
//                 <div class="cart__item-counter">
//                     <span class="cart__item-price">${data.price} грн</span>
//                     <div class="cart-counter">
//                         <button  class="cart-counter__dec cart-counter__btn">
//                             <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M3 9C3 8.58579 3.33579 8.25 3.75 8.25H14.25C14.6642 8.25 15 8.58579 15 9C15 9.41421 14.6642 9.75 14.25 9.75H3.75C3.33579 9.75 3 9.41421 3 9Z" fill="#1D1D1F"></path>
//                             </svg>
//                         </button>
//                         <span class="cart-counter__count">1</span>
//                         <button  class="cart-counter__increment cart-counter__btn">
//                             <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M9 3C9.41421 3 9.75 3.33579 9.75 3.75V14.25C9.75 14.6642 9.41421 15 9 15C8.58579 15 8.25 14.6642 8.25 14.25V3.75C8.25 3.33579 8.58579 3 9 3Z" fill="#1D1D1F"></path>
//                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M3 9C3 8.58579 3.33579 8.25 3.75 8.25H14.25C14.6642 8.25 15 8.58579 15 9C15 9.41421 14.6642 9.75 14.25 9.75H3.75C3.33579 9.75 3 9.41421 3 9Z" fill="#1D1D1F"></path>
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         `;

//         cartList.insertAdjacentHTML('beforeend', cartItemHTML);
//     }

//     // updateCartTotal();
// }

// document.addEventListener('DOMContentLoaded', () => {
//     // Кнопки "Добавить в корзину"
//     const addCartButtons = document.querySelectorAll('.food__item-cart');
//     addCartButtons.forEach(item => {
//         item.addEventListener('click', handleAddToCart);
//     });


//     // Можно также добавить делегирование событий для динамически созданных элементов
//     document.querySelector('.cart__list')?.addEventListener('click', (e) => {

//         if (e.target.closest('.cart-counter__dec')) {
//             console.log('cart-counter__dec', e)
//             handleDecrementButton(e);
//         }
//         if (e.target.closest('.cart-counter__increment')) {
//             console.log('cart-counter__increment', e)
//             handleIncrementButton(e);
//         }
//         if (e.target.closest('.cart__delete')) {
//             console.log('cart__delete', e)
//             handleDeleteItemFromCart(e);
//         }
//     });
// });



// async function handleDeleteItemFromCart(event) {
//     const cartItem = event.target.closest('.cart__item')
//     if (!cartItem) {
//         return;
//     }
//     cartItem.remove()
// }
// async function handleIncrementButton(event) {
//     const cartCounter = event.target.closest('.cart-counter')
//     if (!cartCounter) {
//         return
//     }

//     const counter = cartCounter.querySelector('.cart-counter__count')
//     if (!counter) {
//         return;
//     }

//     const count = counter.innerText
//     let value = parseInt(count);
//     value += 1;
//     counter.innerText = value.toString()
// }

// async function handleDecrementButton(event) {
//     const cartCounter = event.target.closest('.cart-counter')
//     if (!cartCounter) {
//         return
//     }

//     const counter = cartCounter.querySelector('.cart-counter__count')
//     if (!counter) {
//         return;
//     }

//     const count = counter.innerText
//     let value = parseInt(count);
//     if (value == 0) {
//         return;
//     }
//     value -= 1;
//     counter.innerText = value.toString()
// }
