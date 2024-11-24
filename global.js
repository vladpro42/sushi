const nav = [
    { id: 1, name: 'Главная', href: '/index.html' },
    { id: 2, name: 'Категории', href: '/pages/category/index.html' },
    { id: 3, name: 'Доставка', href: '/pages/delivery/index.html' },
]
function initHeader(nav) {
    const body = document.body;
    const header = `
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <nav class="nav">
                    <ul class="nav__list"></ul>
                </nav>
            </div>
        </div>
    </header>`;
    body.insertAdjacentHTML("beforebegin", header)
    const navList = document.querySelector('.nav__list');
    if(!navList) throw new Error(' не найден элемент с классом .nav__list')
    nav.forEach(item => {
        const li = getItem(item)
        navList.appendChild(li);
    })

    function getItem(item) {
        const li = document.createElement('li');
        li.classList.add('nav__item');

        const a = document.createElement('a');
        a.classList.add('nav__link');
        a.href = item.href;
        a.textContent = item.name;

        li.appendChild(a);
        return li
    }
}

initHeader(nav)