const d1 = document.querySelector("#desc1");
const d2 = document.querySelector("#desc2");
const d3 = document.querySelector("#desc3");
const d4 = document.querySelector("#desc4");
const d5 = document.querySelector("#desc5");
const d6 = document.querySelector("#desc6");
const d7 = document.querySelector("#desc7");
const d8 = document.querySelector("#desc8");
const d9 = document.querySelector("#desc9");
const d10 = document.querySelector("#desc10");
const d11 = document.querySelector("#desc11");
const d12 = document.querySelector("#desc12");
const d13 = document.querySelector("#desc13");
const d14 = document.querySelector("#desc14");

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY >= 500) {
        d1.classList.add("op");
    } else {
        d1.classList.remove("op");
    }

    if (scrollY >= 600) {
        d2.classList.add("op");
    } else {
        d2.classList.remove("op");
    }

    if (scrollY >= 700) {
        d3.classList.add("op");
    } else {
        d3.classList.remove("op");
    }

    if (scrollY >= 800) {
        d4.classList.add("op");
    } else {
        d4.classList.remove("op");
    }

    if (scrollY >= 900) {
        d5.classList.add("op");
    } else {
        d5.classList.remove("op");
    }
    if (scrollY >= 1000) {
        d6.classList.add("op");
    } else {
        d6.classList.remove("op");
    }

    if (scrollY >= 1100) {
        d7.classList.add("op");
    } else {
        d7.classList.remove("op");
    }

    if (scrollY >= 1200) {
        d8.classList.add("op");
    } else {
        d8.classList.remove("op");
    }

    if (scrollY >= 1300) {
        d9.classList.add("op");
    } else {
        d9.classList.remove("op");
    }

    if (scrollY >= 1400) {
        d10.classList.add("op");
    } else {
        d10.classList.remove("op");
    }
    if (scrollY >= 1500) {
        d11.classList.add("op");
    } else {
        d11.classList.remove("op");
    }

    if (scrollY >= 1600) {
        d12.classList.add("op");
    } else {
        d12.classList.remove("op");
    }

    if (scrollY >= 1700) {
        d13.classList.add("op");
    } else {
        d13.classList.remove("op");
    }

    if (scrollY >= 1800) {
        d14.classList.add("op");
    } else {
        d14.classList.remove("op");
    }
});

// const txt = document.querySelector("#descript");


// window.addEventListener('scroll', e => {
//     if (pageYOffset >= 220) {
//         descript.classList.add("op");
//     } else {
//         descript.classList.remove("op");
//     }
// });

// window.addEventListener('scroll', () => {
//     const textElement = document.querySelector("description");
//     const words = textElement.innerText.split(' ');

//     // Исправленный синтаксис для создания span
//     textElement.innerHTML = words.map(word => <span>${word}</span>).join(' ');

//     const spans = textElement.querySelectorAll('span');

//     // Условие для срабатывания эффекта при прокрутке
//     if (window.scrollY > 100) { // Измените значение по необходимости
//         spans.forEach((span, index) => {
//             setTimeout(() => {
//                 span.classList.add("op");
//             }, index * 500); // Задержка между появлением слов
//         });
//     }
// });

