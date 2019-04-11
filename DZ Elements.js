//Задача 1. Користувач задає рік народження. Визначити кількість років користувача
function getAge() {
    const BY = parseInt(document.getElementById("birthYear").value)
    const AGE = 2019 - BY
    document.getElementById("birthYear").value = AGE
}
//Задача 2. Конвертер валют.
function moneyConv() {
    const hrn = parseFloat(document.getElementById("suma").value)
    const valkurs = parseFloat(document.getElementById("kurs").value)
    const valuta = hrn / valkurs
    document.getElementById("cash").value = valuta.toFixed(2)
}
//Задача 3. Калькулятор з вибором операції (додавання, віднімання, множення, ділення).
function calc() {
    let n1 = parseFloat(document.getElementById("num1").value)
    let n2 = parseFloat(document.getElementById("num2").value)
    let sum = 0
    const action = parseFloat(document.getElementById("act").value)
    switch (action) {
        case 1: sum = n1 + n2
            break;
        case 2: sum = n1 - n2
            break;
        case 3: sum = n1 * n2
            break;
        case 4: sum = n1 / n2
            break;

    }
    document.getElementById("num3").value = sum
}
//Задача. Сформувати список завдань ( з можливістю подальшого вилучення).
function newTask() {

    let check = document.createElement("input")
    check.type = "checkbox"
    let inp = document.createElement('input')
    inp.type = 'text'
    inp.placeholder = "What to do?"
    let par = document.getElementById('task')
    par.appendChild(check)
    par.appendChild(inp)
    par.innerHTML += "<br>"
}
function completeTask() {
    let boxArr = document.querySelectorAll('input[type=checkbox]')
    let inpArr = document.querySelectorAll('input[type=text]')
    for (let i = 0; i < boxArr.length; i++) {
        if (boxArr[i].checked) {
            boxArr[i].remove()
            inpArr[i].remove()
        }  //намагався зробити видалення таску при відмітці чекбоксу, так і не зрозумів як
    }
}
// Задача 5. Визначення вартості квитків (кількість – число, тип квитка – купе, загальний, плацкарт).
//          На сторінці розмістити відповідні елементи для вводу потрібної інформації 
function Findticket() {
    const kilk = parseInt(document.getElementById("quant").value)
    const chai = document.getElementById('tea')
    const bil = document.getElementById('rug')
    const ticket = parseInt(document.getElementById('ticketType').value)
    let service = 0
    if (chai.checked) service += 12
    if (bil.checked) service += 35
    switch (ticket) {
        case 1: service += 75
            break;
        case 2: service += 280
            break;
        case 3: service += 521
            break;
    }
    document.getElementById('price').value = service * kilk
}





window.onload = function () {
    document.getElementById("btn").onclick = getAge   Простіше було використати select
    document.getElementById("conv").onclick = moneyConv
    document.getElementById("num2").onchange = calc
    document.getElementById("num1").onchange = calc
    document.getElementById("act").onchange = calc
    document.getElementById("Butt").onclick = newTask
    document.getElementById("del").onclick = completeTask
    document.getElementById("bubu").onclick = Findticket
}
