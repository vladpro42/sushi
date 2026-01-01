
const productSwitchDog = document.querySelector('.product__switch-dog');

if (productSwitchDog) {
    productSwitchDog.addEventListener('click', event => {
        console.log('click')
        event.currentTarget.classList.toggle('active')
    })
}


const productCompositionBtn = document.querySelector('.product__composition-btn');


const productCompositionList = document.querySelector('.product__composition-list');
const itemWidth = getComputedStyle(productCompositionList).getPropertyValue('--width-item');
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
