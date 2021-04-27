import {formatError} from './common.js';
import {timerForm, countdownTime, timerResult, startTime, pauseTimer, resetTimer, timerBlock, dateCalcForm} from './elements.js'
import {timing, displayTime} from './time.js';
import {audio, stopAudio} from './audio.js';
import {interfaceUnit} from './interface.js'


let pause = false; //подскажите как можно избавиться от глобальной переменной? Вынести ее в отдельный модуль?

timerForm.addEventListener("submit", countdown);

timerBlock.addEventListener('click', () => {
   interfaceUnit(timerForm, dateCalcForm)
})

function countdown (event) {
   event.preventDefault();
   if(countdownTime.value == '' && timerResult.value == undefined) {
      timerResult.innerHTML = formatError("Требуется ввести число");
      } else {
      startTime.style.display = "none";
      pauseTimer.style.display = "inline-block";
      resetTimer.style.display = "inline-block";


      let time = countdownTime.valueAsNumber
   
      function updateTime () {

         if(time == 0) {
            countdownTime.valueAsNumber = 0
            clearInterval(id)
            audio.play();
            pauseTimer.style.display = "none";
         } else {
            countdownTime.valueAsNumber = time
         }

         const minutes = Math.floor(time/60); 
         let seconds = time % 60;
         timing(seconds);
         displayTime(timerResult, minutes, seconds)

         if(pause == false) {
            time--
         } else {
            clearInterval(id)
            startTime.style.display = "inline-block";
            pauseTimer.style.display = "none";
            pause = !pause;
         }
      }

      pauseTimer.addEventListener("click", pauseTime)
      function pauseTime() {
         pause = !pause;
         clearInterval(id)
      }
   
      resetTimer.addEventListener("click", resetTime)
      function resetTime() {
         clearInterval(id)
         stopAudio()
         countdownTime.value = '';
         timerResult.innerHTML = '';
         startTime.style.display = "inline-block";
         pauseTimer.style.display = "none";
         resetTimer.style.display = "none";
      }

      let id = setInterval(updateTime, 1000);

      // pauseTime(pause, id)
      updateTime ();
      
   } 
}