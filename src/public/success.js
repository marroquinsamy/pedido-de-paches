const id = document.location.search.replace(/^.*?\=/, '')
const idContainer = document.getElementById('id')

idContainer.innerHTML = id
const newLine = '%0D%0A'

const sendEmail = document.getElementById('send-email').addEventListener('click', () => {
    document.location.href = `mailto:jancarlogalvez1234@gmail.com?subject=Consulta, pedido de paches
    &body=<ID del pedido: ${encodeURIComponent(id)}>${newLine}${newLine}Tengo una consulta:${newLine}`
})