let randomNumber;
// let testInput = /^\d+$/;
let minNumber = 1;
let maxNumber = 100;
let counterOfTurns = 0

// Создаём загаданное число в заданном диапазоне чисел
function getRandomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

const setRangeOfNumbers = (min, max) => {
   minNumber = min;
   maxNumber = max;
}

const clearCounterOfTurns = () => {
   counterOfTurns = 0
}

const setRulesForRightNumber = (e) => {
   let inputNumber = Number(document.querySelector('#input').value)
      
   if(inputNumber === randomNumber){
      document.querySelector('.game-block .number__hint').innerText = 'Вы угадали!'
      e.target.parentNode.remove()
      counterOfTurns += 1
      document.querySelector('#hint').innerText = `Количество затраченных попыток: ${counterOfTurns}`
   } else{
      document.querySelector('.game-block .number__hint').innerText = inputNumber > randomNumber ? 'Число больше загаданного' : 'Число меньше загаданного'
      counterOfTurns += 1
      if(counterOfTurns >= 3){
         document.querySelector('#hint').innerText = `Подсказка: загаданное число ${randomNumber % 2 === 0 ? 'чётное' : 'нечётное'}`
      }
   }
   
   if(inputNumber > maxNumber || inputNumber < minNumber){
      document.querySelector('.game-block .number__hint').innerText = 'Вы вышли за пределы диапазона!'
   }
   // Тут косяк при угадывании, решение - дублирование строчки
   try{
      document.querySelector('#input').value = ''
   } catch(e){
      // Ничего не надо делать
   }
}