
let ar = ['sf334kfaeus', '23dvfvouidd', 'fsasd', 'fdfdfd', '22ddddd', 'ddddd']
let str = "Задача 9. Да 25, 05,20 19 но 1 ря 25.01.2018 док тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (01- день, 12- місяць, 2000- рік)."

document.write(`<br>`)

//Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).
let reg1 = /\d+/                             Можна було просто без плюса
let result1 = ar.filter(x => reg1.test(x))
document.write(result1)

//Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.
let reg2 = /\b\D+\b/                         Тут не дуже добре. Краще було зробити регулярку для чисел
let result2 = ar.filter(x => reg2.test(x))     а тут використати ar.filter(x => !reg2.test(x))
document.write(result2)

//Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.
let reg3 = /[aeyuio]/
let result3 = ar.filter(x => reg3.test(x))
document.write(result3)


//Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.
let reg4 = /\b[^aeyuio]+\b/
let result4 = ar.filter(x => reg4.test(x))   Аналогічно, краще було з запереченням
document.write(result4)

//Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.
let reg5 = /(1|3)/    //Тут можна було використати [13]
let result5 = ar.filter(x => reg5.test(x))
document.write(result5)

//Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.
let reg6 = /\d+/g          
let res6 = str.match(reg6)
document.write(res6)

//Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.
let reg7 = /[^\wА-Яа-ї]/g      Будьте уважні з українськими літерами (згадайте, що спецілаьні символи після "я")
let res7 = str.match(reg7)
document.write(res7)

//Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.
let reg8 = /[\wА-Яа-ї]+[^\wА-Яа-ї\s]\s?[\wА-Яа-ї]+/g
let res8 = str.match(reg8)
document.write(res8)

//Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).
let reg9 = /\b\d{2}(\.|,|\-)\d{2}(\.|,|\-)\d{4}\b/g   Символ "|" використовуйте тільки для слів, для літер можна використати [літери]
let res9 = str.match(reg9)
document.write(res9)

//Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
let reg10 = /\b\d{2}\b/g
let result10 = str.match(reg10)
document.write(result10.length)


