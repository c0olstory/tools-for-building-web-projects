
export function timing(seconds) {
   if(seconds < 10) {
      seconds = "0" + seconds
   } else {
      seconds = seconds
}
}

export function displayTime(timerResult, minutes, seconds) {
   timerResult.innerHTML = `Время в минутах: ${minutes}:${seconds}`;
}
       