//Задача 1. Дано масив цілих чисел. Кожне від’ємне число замінити на 0.

let ar = [-3, 5, 2, -5]
ar.forEach((x, i, arr) => (arr[i] < 0) ? arr[i] = 0 : arr[i])
document.write(ar)

//Задача 2. Дано масив цін. Сформувати новий масив, який містить тільки ті ціни, які менші за задану.
const Cina = [1001, 158, 5418, 49, 45, 54, 4, 544, 848, 85, 8, 900, 1200, 5000, 20, 1800]
const lowCost = Cina.filter(x => x < 50)
document.write(lowCost)

//Задача 3. Дано масив цін товарів. Для цін, які менші за 1000грн. додати 20% ціни, 
//для тих, які більші за 1000 грн. відняти 30%.

let arrCina = [1001, 900, 1200, 5000, 20, 1800]
arrCina.forEach((x, i, arr) => { (arr[i] >= 1000) ? (arr[i] *= 0.7) : (arr[i] *= 1.2) })
document.write(arrCina)

//Задача 4. Дано масив імен. Сформувати новий масив, який складається з імен, які починаються на задану літеру.

let names = ['petro', 'stepan', 'aram', 'borja', 'ignat', 'artem']
let firstLetter = names.filter((x, i, arr) => arr[i][0] == 's')
document.write(firstLetter)

// Задача 5. Дано ваги автомобілів на парковці. З’ясувати, чи усі автомобілі є легковими (легшими за 2000 кг).

const auto = [54164, 654, 5415, 1548, 14814, 1841, 1481, 1048, 1484, 1848, 849]
auto.every(x => x > 2000) ? document.write('every cars are hevier than 2t.') : document.write('NOT every cars are hevier than 2t.')

//Задача 6. Дано масив, який зберігає кількість відвідувачів протягом тижня.
// З’ясувати, чи були дні, коли кількість відвідувачів була меншою за 10.

const client = [54, 54, 15, 79, 12, 545, 45, 94, 45, 456, 45]
client.some(x => x < 10) ? document.write('it was a few days when clients quatity was less than 10') : document.write('every day clients quatity was more than 10')

//Задача 7. Розробити функцію, яка би для довільної кількості переданих символів визначала, кількість букв «а».

let SomeText = 'ано масив, який зберігає кількість відвідувачів протягом тижня.З’ясувати, чи були дні, коли кількіст'
const quantA = SomeText.split('').filter((x, i, arr) => arr[i] == 'а')
document.write(quantA.length)

//Задача 8. Розробити функцію, яка би для довільної кількості чисел знаходила добуток чисел

const mass = [5, 4, 2, 3, 1]
let massDob = mass.reduce(((acc, x) => acc *= x), 1)
document.write(massDob)

//Задача 9. Розробити функцію, яка би для довільної кількості чисел знаходила максимальне.

const maxArr = [540, 54, 584, 6486, 21, 8641, 8654, 99186, 5418, 61, 8641, 8]
let max = maxArr.reduce(((acc, x, i, arr) => x > acc ? acc = x : acc), 0)
document.write(max)

//Задача. Відсортувати масив імен за останньою літерою.
const Name = ['івана', 'петрос', 'сашаб', 'игорьв']
const lastLetter = Name.sort((a, b) => {
    if (a[a.length - 1] > b[b.length - 1]) return 1
    if (a[a.length - 1] < b[b.length - 1]) return -1
    return 0
})
document.write(lastLetter)

// 2.	Задача. Дано масив цін. Для усіх товарів, які дорожчі за 1000грн дати знижку 20% 
// (помножити на 0.8), а для усіх інших товарів – надати 5 % знижки (помножити на 0.95).

const arrCin = [100, 1001]
arrCin.forEach((x, i, arr) => (arr[i] > 1000) ? (arr[i] *= 0.8) : (arr[i] *= 0.95))
document.write(arrCin)

//3.	Задача. Дано масив років народження працівників. Вивести масив тих, які є призовного віку (менше 25 років).
const age = [34, 34, 19, 34, 56, 43, 61, 17, 49, 17, 21, 66]
const WarAge = age.filter(x => x < 25)
document.write(WarAge)

//4.	Задача. Дано масив показників гемоглобіну (масив чисел). Сформувати масив тих, які є меншими за 115.

const blood = [34, 114, 109, 34, 156, 43, 161, 107, 49, 117, 121, 166]
const badBlood = blood.filter(x => x < 115)
document.write(badBlood)

//5.	Задача. Дано масив цін товарів. Сформувати масив тих, які є меншими за 2000грн.

const price = [540, 54, 584, 6486, 21, 8641, 8654, 99186, 5418, 61, 8641, 80000]
const lowPrice = price.filter(x => x < 2000)
document.write(lowPrice)

// //Задача. Дано масив цін товарів. Знайти сумарну вартість тих, які знаходяться в межах від 1000 до 2000.

const arrSum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const sumArr = arrSum.reduce(((acc, x) => 1000 < x < 2000 ? acc += x : acc), 0)
document.write(sumArr)

// 7.	Задача. Дано масив номерів автомобілів. Сформувати масив тих, які починаються на літеру «А»
//  і закінчуються на літеру «Р».

const car = ['AO6553BE', 'AO7453CP', 'BC4933TM', 'AH5344BP', 'CT4543XP']
let carNumber = car.filter((x, i, arr) => (arr[i][0] == 'A') && (arr[i][arr[i].length - 1] == 'P'))
document.write(carNumber)

//8.	Задача. Дано масив літер. Сформувати рядок, який складається тільки з голосних літер.
const letters = ['f', 'h', 'f', 's', 'e', 'a', 'n', 'u', 'o', 'a', 't']
const someLetters = letters.filter((x) => x == 'e' || x == 'y' || x == 'u' || x == 'i' || x == 'o' || x == 'a')
document.write(someLetters)
