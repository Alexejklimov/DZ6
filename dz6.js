//Задача 1. Дано масив цілих чисел. Кожне від’ємне число замінити на 0.
const toNull = (x,i,arr) =>{
    if (arr[i]< 0){
        arr[i] = 0
    }
}
let ar = [-3, 5, 2, -5]
ar.forEach(toNull)
document.write(ar)

//Задача 3. Дано масив цін товарів. Для цін, які менші за 1000грн. додати 20% ціни, 
//для тих, які більші за 1000 грн. відняти 30%.
const cina = (x, i, arr) => {
    if (arr[i] < 1000) {
        arr[i] *= 1.2
    } else if (arr[i] > 1000) {
        arr[i] *= 0.7
    }
}
let arrCina = [1001, 900, 1200, 5000, 20, 1800]
arrCina.forEach(cina)
document.write(arrCina)

//Задача 6. Дано масив, який зберігає кількість відвідувачів протягом тижня.
// З’ясувати, чи були дні, коли кількість відвідувачів була меншою за 10.

const people = (x,i,arr)=> {
return x<10
}
let client =[54,54,5,79,12,545,45,94,45,456,45]
if (client.some(people)){ 
    document.write('it was a few days when clients quatity was less than 10')
}
else {
    document.write('every day clients quatity was more than 10')
}

//Задача 7. Розробити функцію, яка би для довільної кількості переданих символів визначала, кількість букв «а».
const a = (x, i, arr) => {
    if (arr[i] == 'а') return arr[i]
}
let SomeText = 'ано масив, який зберігає кількість відвідувачів протягом тижня.З’ясувати, чи були дні, коли кількіст'
let result = SomeText.split('').filter(a)
document.write(result.length)

//Задача. Відсортувати масив імен за останньою літерою.
const sortName = (x, i) => {
    if (x[x.length-1] > i[i.length-1]) return 1
    if (x[x.length-1] < i[i.length-1]) return -1
    else return 0
}
let Name = ['івана', 'петрос', 'сашаб', 'игорьв']
Name.sort(sortName)
document.write(Name)

//Задача. Дано масив цін товарів. Знайти сумарну вартість тих, які знаходяться в межах від 1000 до 2000.

const sum = (count,x,i,arr) =>{
if (x>=1000 && x<=2000) {
    count +=x
}
return count
}
let arrSum=[1231,545,2151,5152,1551,5112,1000,1000]
let resultSum = arrSum.reduce(sum,0)
document.write(resultSum)