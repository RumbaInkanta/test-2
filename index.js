const button = document.querySelector('button')
const h4 = document.querySelector('h4')
const start = document.querySelector('input')


//Определяем введенное значение
button.addEventListener('click', move)

function move() {
    let letters = ['A','B','C','D','E','F','G','H']    
    let startCurrent = start.value.slice(0,1)
    let y = parseInt(start.value.slice(1,2)) // положение по оси y
    let x = 0 // положение по оси x

    letters.forEach(function(element,index) {
        if (startCurrent === element) {
            x = index
        }
    })
    //массив с возможными вариантами хода конем
    let varsX = [x+2,x+2,x-2,x-2,x+1,x+1,x-1,x-1]
    let varsY = [y-1,y+1,y-1,y+1,y-2,y+2,y-2,y+2]
   

    let isField = [] //массив с проверкой входа в поле
    for (let i = 0; i < 8; i++) {
        isField.push((varsX[i]>=0 && varsX[i]<=7) && (varsY[i]>0 && varsY[i]<=7))//из-за индексирования массива с нуля по оси y устраняем элементы
    }            

    let varXCurrent = [] // промежуточные массивы, находящиеся в поле
    let varYCurrent = []
    for (let i = 0; i < 8; i++) {
        if (isField[i] === true) {
            varXCurrent.push(varsX[i])
            varYCurrent.push(varsY[i])
        }
    }
    for (let i = 0; i < 8; i++) { // обзываем
        if (varXCurrent[i] === 0) {varXCurrent[i] = 'A'}
        if (varXCurrent[i] === 1) {varXCurrent[i] = 'B'}
        if (varXCurrent[i] === 2) {varXCurrent[i] = 'C'}
        if (varXCurrent[i] === 3) {varXCurrent[i] = 'D'}
        if (varXCurrent[i] === 4) {varXCurrent[i] = 'E'}
        if (varXCurrent[i] === 5) {varXCurrent[i] = 'F'}
        if (varXCurrent[i] === 6) {varXCurrent[i] = 'G'}
        if (varXCurrent[i] === 7) {varXCurrent[i] = 'H'}       
    }
    let str = [] //сводим массивы поэлементно
    for (let i = 0; i < 8; i++) {
        str[i] = varXCurrent[i] + varYCurrent[i]
    }
    let strVar = str.filter(Boolean) //фильтруем undefined
    
    h4.textContent = strVar.toString()  
}
