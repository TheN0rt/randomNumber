const setEventForBackBtn = () => {
   document.querySelector('#back').addEventListener('click', () => {
      clearGameBlock()
      clearCounterOfTurns()
      createStartMenu()
   })
}

const setEventForCustomRange = () => {
   document.querySelector('#other').addEventListener('click', () => {
      clearStartMenu()
      document.querySelector('.game-block').innerHTML = `
         <h2>Напишите диапазон чисел</h2>
         <div class="range-block">
            <label for="minNumber-input">
               от
               <input type="number" id="minNumber-input">
            </label>
            <label for="maxNumber-input">
               до
               <input type="number" id="maxNumber-input">
            </label>
         </div>
         <button id="play__custom">Начать</button>
         <button id="back">Выйти</button>
      `
      // setEventForGameBtn(Number(document.querySelector('#minNumber-input')), 23, 'play__custom')
      document.querySelector('#play__custom').addEventListener('click', () => {
         let min = Number(document.querySelector('#minNumber-input').value)
         let max = Number(document.querySelector('#maxNumber-input').value)
         if(min > max){
            alert('Максимальное число не может быть меньше минимального!')
         } else if(min === max){
            alert('Минимальное число не может быть равно максимальному!')
         } else{
            createGame(min, max)
         }
      })

      setEventForBackBtn()
   })
}

const setEventForReplayBtn = (min, max) => {
   document.querySelector('#replay').addEventListener('click', () => {
      createGame(min, max)
      clearCounterOfTurns()
   })
}

const setEventForGameBtn = (min, max, id) => {
   document.querySelector(`#${id}`).addEventListener('click', () => {
      createGame(min, max)
   })
}

const setEventForInput = () => {
   document.querySelector('#input').addEventListener('keydown', (e) => {
      if (e.code === 'Enter') {
         setRulesForRightNumber(e)
      } else if(e.code === 'e'){ // e подразумевает Math.e
         return false
      }
   });
}

const setBtnEvent = () => {
   document.querySelector('#btn').addEventListener('click', (e) => {
      setRulesForRightNumber(e)
   })
}

const createGame = (min, max) => {
   setRangeOfNumbers(min, max)
   clearStartMenu()
   createGameBlock()
   randomNumber = getRandomNumber(min, max)
   setBtnEvent()
   setEventForInput()
}

setEventForGameBtn(minNumber, maxNumber, 'play__100')
setEventForCustomRange()