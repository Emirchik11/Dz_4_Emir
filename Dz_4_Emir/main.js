
const answer = document.querySelector('.counter_inner-current-number')
const increment = document.querySelector('.increment');
const decrement = document.querySelector('.decrement');
let counter = 0;

increment.addEventListener('click', () => {
    counter++
    answer.innerText = counter
    answer.style.color="green"
})

decrement.addEventListener('click', () => {
    if(counter>0){
    counter--;
    answer.innerText = counter
    answer.style.color="red"
    }
})


const container = document.getElementById('container');
const coordinatElement = document.getElementById('coordinat');


container.addEventListener('mousemove', (e) => {

    const x = e.offsetX;
    const y = e.offsetY;


    coordinatElement.textContent = `Координаты: X: ${x}, Y: ${y}`;
});

const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')
const textTraffic = document.querySelector('.text_traffic')
const colorTrafficChange = (color) => {
    red.classList.remove('active')
    yellow.classList.remove('active')
    green.classList.remove('active')

    if (color.toLowerCase() === 'красный'){
        red.classList.add('active')
        alert('STOP')
    }else if(color.toLowerCase() === 'желтый'){
        yellow.classList.add('active')
        alert('WAIT')
    }else if(color.toLowerCase() === 'зеленый'){
        green.classList.add('active')
        alert('GO')
    }else{
        alert('Не правильный цвет')
    }
}
const writeColor = prompt('Введите цвет светофора (Красный,Зеленый,Желтый)')
colorTrafficChange(writeColor)











