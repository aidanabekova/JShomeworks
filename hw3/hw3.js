// Задание 1:
// Сделать функцию котороя принимает 2 number аргумента
// И вычисляет какой из них меньше
function Comparison () {
    let num1 = prompt('Number 1: ')
    let num2 = prompt('Number 2: ')
    if(num1 > num2){
        console.log(`${num1} больше, чем ${num2}`)
    }else if(num2 > num1){
        console.log(`${num1} меньше, чем ${num2}`)
    }else {
        console.log('они равны ')
    }
}
Comparison()
// Задание 2:
// Написать функцию countChar
// Которая может считать длину переданной как аргумент
function countChar () {
    let argument = prompt('Введите что-нибудь, без разницы что')
    console.log(`Длина аргумента ${argument.length} символов`)
}
countChar()