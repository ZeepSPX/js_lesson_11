"use strict"

// Задача 1. Знайти суми елементів у вказаній області---------------------------------------------------------------------------------

const arrUserOne = [
  [1, 2, 3, 45],
  [4, 5, 6, 3],
  [7, 8, 9, 89],
  [10, 11, 12]
]

// 1)
let sumOne = 0
for (let i = 0; i < arrUserOne.length / 2; i++) {
  for (let j = 0; j < arrUserOne[i].length / 2; j++) {
    sumOne += arrUserOne[i] [j]
  }
}

// 2) 
let sumTwo = 0
for (let i = 0; i < arrUserOne.length / 2; i++) {
  for (let j = arrUserOne[i].length / 2; j < arrUserOne[i].length; j++) {
    sumTwo += arrUserOne[i][j]
  }  
}


// 3)
let sumThree = 0
for (let i = arrUserOne.length / 2; i < arrUserOne.length; i++) {
  for (let j = 0; j < arrUserOne[i].length; j++) {
  sumThree += arrUserOne[i] [j]
  }
}

// 4)
let sumFour = 0
for (let i = arrUserOne.length; i < arrUserOne.length; i++) {
  for (let j = arrUserOne[i].length / 2; j < arrUserOne[i].length; j++) {
    sumFour += arrUserOne[i] [j] 
  }
}


//5. Сума парних рядків =====================================================
let sumFive = 0 
for (let i = 0; i < arrUserOne.length; i++) {
  if (i % 2 === 0) {
    for (let j = 0; j < arrUserOne[i].length; j++) { 
      sumFive += arrUserOne[i] [j]
    }  
  }
}


//6. Сума непарних стовпців =============================================================
let sumSix = 0
for (let i = 0; i < arrUserOne.length; i++) {
  for (let j = 1; j < arrUserOne[i].length; j += 2) {
    sumSix += arrUserOne[i] [j]
  }
}

//7. Сума у парних рядках - непарні стовпців, у непарних парні ===========================
let sumSeven = 0
let sumSevenTwo = 0
for (let i = 0; i < arrUserOne.length; i++) {
  for (let j = 0; j < arrUserOne.length; j++) {
    if (i % 2 === 0 && j % 2 !== 0) {
      sumSeven += arrUserOne[i] [j]
    } else if (i % 2 !== 0 && j % 2 === 0){
      sumSevenTwo += arrUserOne[i] [j]
    }
  }
}

document.write(`<div class="one__container"> <div> Сума елементів у першій половині ${sumOne}</div></div>`)
document.write(`<div class="one__container"> <div> Сума елементів у другій половині ${sumTwo}</div></div>`)
document.write(`<div class="one__container"> <div> Сума елементів у 1/3 половині ${sumThree}</div></div>`)
document.write(`<div class="one__container"> <div> Сума елементів у 1/4 половині ${sumFour}</div></div>`)
document.write(`<div class="one__container"> <div> Сума парних рядків  ${sumFive}</div></div>`)
document.write(`<div class="one__container"> <div> Сума непарниз стовпців ${sumSix}</div></div>`)
document.write(`<div class="one__container"> <div> Сума у парних рядках - непарні стовпців ${sumSeven} , у непарних парні стовпці ${sumSevenTwo}</div></div> `)




