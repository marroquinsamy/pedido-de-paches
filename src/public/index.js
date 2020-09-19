const form = document.getElementsByTagName('form')

document.querySelector('.btn').addEventListener('click', (evt) => {
    evt.target.classList.add('loading')

    setTimeout(() => {
        evt.target.classList.remove('loading')
        form[0].submit()
    }, 3000);
})

function priceCalculator() {
    quantity = document.getElementById('quantity').value
    price.innerHTML = `${quantity * 10}`
    console.log(quantity)
}

const price = document.getElementById('price')
let quantity = document.getElementById('quantity').value
priceCalculator()

const quantityButtons = document.getElementsByClassName('quantity-buttons   ')
for (let button of quantityButtons) {
    button.addEventListener('click', () => {
        priceCalculator()
    })
}

document.getElementById('reset-button').addEventListener('click', () => {
    priceCalculator()
    form[0].reset()
})