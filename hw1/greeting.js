// let name = prompt("What's your name?")
// console.log('Hello ' + name + ' My name is JavaScript, nice to meet you!')

// const first_array = ['GeeckTech', 0, true, false, 'frontend', 0.80]
// const second_array = [23.4, false, 'Ibadat']
// console.log(first_array)
// console.log(second_array)
// if (first_array.length > second_array.length) {
//     console.log('Первый массив больше , чем второй массив')
// } else if (second_array.length > first_array.length) {
//     console.log('Второй массив больше , чем первый массив')
// } else if (first_array.length === second_array.length) {
//     console.log('Они равны')
// } else {
//     console.log('Что-то не так:(')
// }


let color = prompt('Веедите цвет(зеленый,желтый,красный): ')
switch (color) {
    case 'зеленый':
        alert('Переходите дорогу!');
        break;
    case 'красный':
        alert('Стоп!');
        break;
    case 'желтый':
        alert('Готовьтесь!');
        break;
    default:
        alert('Нет таких цветов в светофоре!')
}