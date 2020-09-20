const form = document.getElementById('form')

form.addEventListener('submit', (evt) => {
    evt.defaultPrevented()
})

document.querySelector('.btn').addEventListener('click', (evt) => {
    evt.target.classList.add('loading')
    if (validateForm()) {
        setTimeout(() => {
            form.submit()
            setTimeout(() => {
                evt.target.classList.remove('loading')
                price.innerHTML = `40`
                form.reset()
            }, 500)
        }, 2000)
    } else {
        evt.target.classList.remove('loading')
        alert('Los campos de datos personales deben de ser llenados.')
    }
})

function priceCalculator() {
    quantity = document.getElementById('quantity').value
    price.innerHTML = `${quantity * 10}`
}

const price = document.getElementById('price')
let quantity = document.getElementById('quantity').value
priceCalculator()

const quantityButtons = document.getElementsByClassName('quantity-buttons')
for (let button of quantityButtons) {
    button.addEventListener('click', () => {
        priceCalculator()
    })
}

document.getElementById('reset-button').addEventListener('click', () => {
    price.innerHTML = `40`
    form.reset()
})

function validateForm() {
    const name = document.forms['form']['name'].value.trim()
    const phone = document.forms['form']['phone'].value.trim()
    const address = document.forms['form']['address'].value.trim()
    if (name == '' || phone == '' || address == '') {
        return false
    } else {
        return true
    }
}