const btnAddNewAddres = document.querySelector('#add-new-address');

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