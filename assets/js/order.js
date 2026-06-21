const btnAddNewAddres = document.querySelector('#add-new-address');
console.log('hello')
if (btnAddNewAddres) {
    btnAddNewAddres.addEventListener('click', () => {
        const newAddressBlock = document.querySelector('.new-address');
        const orderFormFieldset = document.querySelector('.order-form__fieldset');
        const orderFormAddressBtns = document.querySelector('.order-form__address-btns');
        const newAddressBtns = document.querySelector('.new-address__btns');


        if (!newAddressBlock) return
        if (!orderFormFieldset) return
        if (!orderFormAddressBtns) return
        if (!newAddressBtns) return

        newAddressBlock.classList.add('active')
        orderFormFieldset.classList.remove('active')
        orderFormAddressBtns.classList.remove('active')
        newAddressBtns.classList.add('active')

    })
}



const addNewAddressBack = document.querySelector('#add-new-address-back');

if (addNewAddressBack) {
    addNewAddressBack.addEventListener('click', () => {
        const newAddressBlock = document.querySelector('.new-address');
        const orderFormFieldset = document.querySelector('.order-form__fieldset');
        const newAddressBtnsBlock = document.querySelector('.new-address__btns');
        const orderFormAddressBtns = document.querySelector('.order-form__address-btns');

        if (!newAddressBlock) return
        if (!orderFormFieldset) return
        if (!newAddressBtnsBlock) return
        if (!orderFormAddressBtns) return

        newAddressBlock.classList.remove('active')
        orderFormFieldset.classList.add('active')
        addNewAddressBack.classList.remove('active')
        newAddressBtnsBlock.classList.remove('active')
        orderFormAddressBtns.classList.add('active')

    })
}


// const orderFormDeliveryType = document.querySelector('.order-form__delivery-type');

// orderFormDeliveryType.addEventListener('click', event => {
//     const target = event.target
//     if (target.tagName !== 'BUTTON') {
//         return
//     }

//     if (target.classList.contains('active')) {
//         return
//     }

//     const prevActive = orderFormDeliveryType.querySelector('.active')
//     if (prevActive) {
//         prevActive.classList.remove('active')
//     }
//     target.classList.add('active')
// })


const orderFormDeliveryBtns = document.querySelectorAll('.order-form__delivery-btn')

orderFormDeliveryBtns.forEach((item, index, arr) => {
    item.addEventListener('click', event => {
        arr.forEach(item => item.classList.remove('active'))
        event.currentTarget.classList.add('active')
    })
})


const pickupCities = document.querySelectorAll('.pickup__city')

pickupCities.forEach((item, _, arr) => {
    item.onclick = event => {
        arr.forEach(item => item.classList.remove('active'))
        event.currentTarget.classList.add('active')
    }
})

const orderList = document.querySelector('.order__list');
const orderTotalPrice = document.querySelector('.order__total-price');

// Функция для пересчета общей суммы
function updateTotalPrice() {
    let total = 0;
    const items = orderList.querySelectorAll('.order__item');

    items.forEach(item => {
        const priceElement = item.querySelector('.order__item-price');
        const counterElement = item.querySelector('.order-counter__count');

        if (priceElement && counterElement) {
            const price = parseFloat(priceElement.textContent.replace(/[^\d.]/g, '')) || 0;
            const count = parseInt(counterElement.textContent) || 0;
            total += price * count;
        }
    });

    if (orderTotalPrice) {
        orderTotalPrice.textContent = `${total.toFixed(2)} ₽`; // Форматируем как вам нужно
    }
}

if (orderList) {
    orderList.addEventListener('click', event => {
        const deleteButton = event.target.closest('.order__delete');
        if (deleteButton) {
            const orderItem = deleteButton.closest('.order__item');
            orderItem?.remove();
            updateTotalPrice(); // Обновляем сумму после удаления
            return;
        }

        const orderCounterIncrement = event.target.closest('.order-counter__increment');
        const orderCounterDec = event.target.closest('.order-counter__dec');

        if (orderCounterIncrement || orderCounterDec) {
            const counterBlock = (orderCounterIncrement || orderCounterDec).closest('.order__item-counter');
            const counterText = counterBlock?.querySelector('.order-counter__count');

            if (counterText) {
                let value = parseInt(counterText.textContent);
                if (!isNaN(value)) {
                    if (orderCounterIncrement) {
                        value += 1;
                    } else if (orderCounterDec) {
                        value = Math.max(1, value - 1);
                    }
                    counterText.textContent = value;
                    updateTotalPrice(); // Обновляем сумму после изменения счетчика
                }
            }
        }
    });

    // Инициализируем общую сумму при загрузке
    updateTotalPrice();
}
