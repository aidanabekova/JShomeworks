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

function countChar () {
    let argument = prompt('Введите что-нибудь, без разницы что')
    console.log(`Длина аргумента ${argument.length} символов`)
}
countChar()