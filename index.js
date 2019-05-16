const button = document.querySelector('button')
const h4 = document.querySelector('h4')
const start = document.querySelector('input')
let letters = ['A','B','C','D','E','F','G','H']
let numbers = [1,2,3,4,5,6,7,8]

//Определяем введенное значение
button.addEventListener('click', move)

function move() {
        
    let start1 = start.value.slice(0,1)
    let y = parseInt(start.value.slice(1,2)) // положение по оси y
    h4.textContent = start.value
    let x = 0 // положение по оси x

    letters.forEach(function(element,index) {
        if (start1 === element) {
            x = index
        }
    })
    //массив с возможными вариантами хода конем
    let varsX = [x+2,x+2,x-2,x-2,x+1,x+1,x-1,x-1]
    let varsY = [y-1,y+1,y-1,y+1,y-2,y+2,y-2,y+2]


    //проверяем входит ли ячейка в поле
    function isField(element) {
        return element >= 0 & element <=7
        }
    //проверяем какой элемент нужно убрать для 2 подмассива varsY
    varsX.forEach(function(element,index) {
        if (element < 0 | element >7) console.log(index)
    })
    console.log(varsX)
    console.log(varsY.filter(isField))
}




// let mas = [[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],
//            [2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8]]
// let s = parseFloat(mas[[3]])+parseFloat(possibleMoves[[0]])
// console.log(s)
// function matrixArray(rows,columns){
//     var arr = new Array()
//     let x=1,y=8
//     for(var i=0; i<rows; i++){
//       arr[i] = new Array()
//       for(var j=0; j<columns; j++){
//         arr[i][j] = i,j
//       }
//     }
//     return arr
//   }
// var myMatrix = matrixArray(8,8);
// console.log(myMatrix)


// console.log(myMatrix[3])
// for (let i=1; i<65; i++) {
//     let excel = 
// }
// let excel = []
// let x=1,y=8
// for (let i=1; i<65; i++) {
//     if (x>8) {
//         x=1
//         y--
//     }
//     excel[i] = x;
//     excel[i] = y;
//     x++
// }

