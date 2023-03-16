"use strict"

// Задача 3. Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. Користувач стріляє вказуючи координати. Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди. ---------------------------------------------------------------------------------

// функція для генерації випадкових чисел в заданому діапазоні
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// створюємо двовимірний масив 6x6 та заповнюємо його нулями
let board = [];
for (let i = 0; i < 6; i++) {
  board[i] = [];
  for (let j = 0; j < 6; j++) {
    board[i][j] = 0;
  }
}

// розташовуємо 5 кораблів на полі
let shipsPlaced = 0;
while (shipsPlaced < 5) {
  let shipX = getRandomInt(0, 5);
  let shipY = getRandomInt(0, 5);
  if (board[shipX][shipY] !== 1) {
    board[shipX][shipY] = 1;
    shipsPlaced++;
  }
}

// гра продовжується доти, поки не потоплено всі кораблі
let shotsRemaining = 10;
let shipsRemaining = 5;
while (shipsRemaining > 0 && shotsRemaining > 0) {
  let x = prompt("Введіть координату x (0-5):");
  let y = prompt("Введіть координату y (0-5):");
  if (board[x][y] === 1) {
    alert("Ви потопили корабель!");
    board[x][y] = "X"; // позначаємо потоплений корабель на полі
    shipsRemaining--;
  } else {
    alert("Промах!");
    board[x][y] = "-"; // позначаємо промах на полі
  }
  shotsRemaining--;
}

// виводимо результат гри на екран
if (shipsRemaining === 0) {
  alert("Ви виграли!");
} else {
  alert("Гра закінчилась. Ви не встигли потопити всі кораблі.");
}

