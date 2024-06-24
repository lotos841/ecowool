const square = document.getElementById('square')
const height = document.getElementById('height')
const square_range = document.getElementById('square-input')
const height_range = document.getElementById('height-input')
const price = document.getElementById('price')


square_range.addEventListener('input', e => {
    square.textContent = `Площадь = ${e.target.value} м²`
    calculate()
})

height_range.addEventListener('input', e => {
    height.textContent = `Толщина = ${e.target.value} см`
    calculate()
})

function calculate () {
    price.textContent = Math.floor(square_range.value * (height_range.value / 100) * 2800) +' руб';
}

