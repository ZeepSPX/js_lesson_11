"use strict"

// Задача 2. Дано інформацію про прибуток К магазинів протягом тижня. Знайти: ----------------------------------------
function getArrayRandomNumbers(rowsNum, columnNum, valueMin, valueMax) {
  let result = []
  for (let i = 0; i < rowsNum; i++) {
    let arr = []
    for (let j = 0; j < columnNum; j++) {
      const numbRandom = Math.floor(Math.random() * (valueMax - valueMin +1)) + valueMin
      arr.push(numbRandom)
    }
    result.push(arr)
  }
  return result
}

const arrayStoreProfits = getArrayRandomNumbers(3, 7, 1000, 3500)

//1. Загальний прибуток кожного масиву за тиждень;
function getProfitEachStore(arrayProfit) {
  let profitEach = []
  for (let i = 0; i < arrayProfit.length; i++) {
    let profit = 0
    for (let j = 0; j < arrayProfit[i].length; j++) {
      profit += arrayProfit[i] [j]
    }
    profitEach.push(profit)
  }
  return profitEach
}

const profitEachStore = getProfitEachStore (arrayStoreProfits)

// 2. Загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
function getTotalProfitAllStoreDay(arrayProfit) {
  let profitAll = []
  for (let i = 0; i < arrayProfit[0].length; i++) {
    let dayProfit = 0
    for (let j = 0; j < arrayProfit.length; j++) {
      dayProfit += arrayProfit[j] [i]
    }
    profitAll.push(dayProfit)
  }
  return profitAll
}

const totalProfitAllStoreDay = getTotalProfitAllStoreDay (arrayStoreProfits)

// 3. Загальний прибуток за робочі дні
function getTotalProfitWorkingDay(arrayProfit) {
  let profitWorking = []
  for (let i = 0; i < arrayProfit.length; i++) {
    let workingProfit = 0
    for (let j = 0; j < arrayProfit[i].length; j++) {
      workingProfit += arrayProfit[i] [j]
    }
    profitWorking.push(workingProfit)
  }
  return profitWorking
}

const totalProfitWorkingDay = getTotalProfitWorkingDay (arrayStoreProfits)

// 4. Загальний прибуток за вихідні дні
function getTotalProfitWeekendDay(arrayProfit) {
  let profitsWeekend = []
  for (let i = 0; i < arrayProfit.length; i++) {
    let weekendProfits = 0
    for (let j = arrayProfit[i].length - 1; j >= arrayProfit[i].length - 2; j--) {
      weekendProfits += arrayProfit[i] [j]
    }
    profitsWeekend.push(weekendProfits)
  }
  return profitsWeekend
}

const totalProfitWeekendDay = getTotalProfitWeekendDay (arrayStoreProfits)

// 5. Максимальний прибуток за середу
function getProfitMaxWednesday(arrayProfit) {
  let profitMax = -Infinity
  for (let i = 0; i < arrayProfit.length; i++) {
    if (arrayProfit[i][2] > profitMax) {
      profitMax = arrayProfit[i][2]
    }
  }
  return profitMax
}

const profitMaxWednesday = getProfitMaxWednesday(arrayStoreProfits)

// 6. Сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
  function getProfitGreater200(arrayProfit) {
    let profitGreater200 = []
    for (let i = 0; i < arrayProfit.length; i++) {
      for (let j = 0; j < arrayProfit[i].length; j++) {
        if (arrayProfit[i] [j] > 200) {
          profitGreater200.push(arrayProfit[i][j])
        }
      }
    }
    return profitGreater200
  }

  const profitGreater200 = getProfitGreater200(arrayStoreProfits)

// 7. Відсортувати кожен тиждень за зростанням
function getSortWeeksByIncrease(arrayProfit) {
  for (let i = 0; i < arrayProfit.length; i++) {
    arrayProfit[i].sort((a, b) => a - b)
  }
  return arrayProfit
}

const sortedArrayByWeek = getSortWeeksByIncrease(arrayStoreProfits)

// 8. Відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
function getSortWeeksByMaxValueDescending(arrayProfit) {
  arrayProfit.sort((a, b) => {
    const maxA = Math.max(...a)
    const maxB = Math.max(...b)
    return maxB - maxA
  })
  return arrayProfit
}

const sortedArrayByMaxValueDescending = getSortWeeksByMaxValueDescending(arrayStoreProfits)


// 9. Упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).
function getSortWeeksBySumDescending(arrayProfit) {
  arrayProfit.sort((a, b) => {
    const sumA = a.reduce((acc, val) => acc + val, 0)
    const sumB = b.reduce((acc, val) => acc + val, 0)
    return sumB - sumA
  })
  return arrayProfit
}

const sortedArrayBySumDescending = getSortWeeksBySumDescending(arrayStoreProfits)


document.write(`<div class="one__container"> <div> Загальний прибуток кожного масиву за тиждень: ${profitEachStore}</div></div> `)
document.write(`<div class="one__container"> <div> Загальний прибуток усіх магазинів по дням: ${totalProfitAllStoreDay}</div></div> `)
document.write(`<div class="one__container"> <div> Загальний прибуток за робочі дні: ${totalProfitWorkingDay}</div></div> `)
document.write(`<div class="one__container"> <div> Загальний прибуток за вихідні дні: ${totalProfitWeekendDay}</div></div> `)
document.write(`<div class="one__container"> <div> Максимальний прибуто за середу: ${profitMaxWednesday}</div></div> `)
document.write(`<div class="one__container"> <div> Сформувати загальний список (одновимірний масив) зі значенням, які більші за 200: ${profitGreater200}</div></div> `)
document.write(`<div class="one__container"> <div> Відсортувати кожен тиждень зв зростанням: ${sortedArrayByWeek}</div></div> `)
document.write(`<div class="one__container"> <div> Відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків: ${sortedArrayByMaxValueDescending}</div></div> `)
document.write(`<div class="one__container"> <div> Упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше): ${sortedArrayBySumDescending}</div></div> `)