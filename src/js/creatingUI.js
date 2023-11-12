const createGameBlock = () => {
   const gameBlock = document.querySelector('.game-block')
   gameBlock.innerHTML = `
      <h2>Компьютер загадал число</h2>
      <p class="number__hint"></p>
      <div class="input-block">
         <input type="number" id="input" placeholder="Введите число">
         <button id="btn">&#8594;</button>
      </div>
      <p id="hint"></p>
      <button id="replay">Заново</button>
      <button id="back">Выйти</button>
   `
   setEventForReplayBtn(minNumber, maxNumber)
   setEventForBackBtn()
}

const clearGameBlock = () => {
   document.querySelector('.game-block').innerHTML = ''
}

const createStartMenu = () => {
   document.querySelector('.additive__actions').innerHTML = `
      <button id="play__100">Играть в 100 чисел</button>
      <button id="other">Играть в другом диапазоне чисел</button>
   `

   setEventForGameBtn(minNumber = 1, maxNumber = 100, 'play__100')
   setEventForCustomRange()
}

const clearStartMenu = () => {
   document.querySelector('.additive__actions').innerHTML = ''
}