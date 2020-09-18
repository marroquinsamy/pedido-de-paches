// let x
// const conBtn = document.querySelector('.con-btn')
// const arrow = document.querySelector('.arrow')
// const text = document.querySelector('.text')

// conBtn.addEventListener('touchmove', (evt) => {
//     x = evt.touches[0].clientX - evt.target.closest('.con-btn').offsetLeft - 30
//     const w = evt.target.closest('.con-btn').clientWidth
//     if (x < 0) {
//         x = 0
//     }
//     if (x > w - 60) {
//         x = w - 60
//     }
//     if (x > w - 120) {
//         conBtn.classList.add('check')
//     } else {
//         conBtn.classList.remove('check')
//     }
//     anime({
//         targets: '.arrow',
//         translateX: `${x}px`,
//         duration: 300,
//     })
//     anime({
//         targets: '.drips-arrow',
//         translateX: `${x}px`,
//         duration: 300,
//     })
//     anime({
//         targets: '.drips-content',
//         translateX: `${-x / 4.5}px`,
//         translateY: `${-x / 2}px`,
//         duration: 300,
//     })
//     anime({
//         targets: '.drips-content-2',
//         translateX: `${-x / 4}px`,
//         translateY: `${x / 2}px`,
//         duration: 300,
//     })
//     anime({
//         targets: '.drips-content-3',
//         translateX: `${-x / 1.5}px`,
//         duration: 300,
//     })
//     anime({
//         targets: '.drips-right',
//         translateX: `${-x / 5}px`,
//         duration: 300,
//     })

//     conBtn.classList.add('swipe')
// })

// arrow.addEventListener('touchend', (evt) => {
//     const w = evt.target.closest('.con-btn').clientWidth

//     conBtn.classList.remove('swipe')

//     if (x < w - 120) {
//         anime({
//             targets: '.arrow',
//             translateX: `${0}px`,
//             duration: 600,
//         })
//         anime({
//             targets: '.drips-arrow',
//             translateX: `${0}px`,
//             duration: 600,
//         })
//         anime({
//             targets: '.drips-content',
//             translateX: `${0}px`,
//             translateY: `${0}px`,
//             duration: 300,
//         })
//         anime({
//             targets: '.drips-content-2',
//             translateX: `${0}px`,
//             translateY: `${0}px`,
//             duration: 300,
//         })
//         anime({
//             targets: '.drips-content-3',
//             translateX: `${0}px`,
//             translateY: `${0}px`,
//             duration: 300,
//         })
//         anime({
//             targets: '.drips-right',
//             translateX: `${0}px`,
//             duration: 300,
//         })
//         text.innerHTML = 'Desliza para confirmar'
//     }
//     if (x >= w - 120) {
//         anime({
//             targets: '.arrow',
//             translateX: `${w - 60}px`,
//             duration: 400,
//         })
//         anime({
//             targets: '.drips-arrow',
//             translateX: `${w - 60}px`,
//             duration: 400,
//         })
//         text.innerHTML = "Enviado"
//     }
// })

document.querySelector('.btn').addEventListener('click', (evt) => {
    evt.target.classList.add('loading')

    setTimeout(() => {
        evt.target.classList.remove('loading')
    }, 3000);
})

const price = document.getElementById('price')
let quantity = document.getElementById('quantity').value
const quantityButtons = document.getElementsByClassName('quantity')
for (let button of quantityButtons) {
    button.addEventListener('click', () => {
        quantity = document.getElementById('quantity').value
        price.innerHTML = `${quantity * 10}`
        console.log(quantity)
    })
}