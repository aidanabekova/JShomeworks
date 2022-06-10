// "Треугольник в цикле"
for(let i = 1; i < 10; i++){
    console.log(Array(i).fill('*').join(' '))
}
//испольховала Array чтобы преобразовать i в массив(список)
//fill заполняет весь массив значением,которое мы ввели (в данном случае *), также у него есть необязательные атрибуты start и and
//по умолчанию он начинает работать с нулевого индекса
//join для того, чтобы объединить все * в массиве , а то они были разделены запятой и ковычками, а также передавались как object

//Задача "FizzBuzz": напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями:
// Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
// Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3, и на 5.

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log('FizzBuzz')
    } else if (i % 5 === 0){
        console.log('Buzz')
    } else if (i % 3 === 0){
        console.log('Fizz')
    } else {
        console.log(i)
    }
}

