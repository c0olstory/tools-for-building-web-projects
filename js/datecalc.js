import {formatError} from './common.js';
import {dateCalcForm, dateCalcResult, datecalcBlock, timerForm} from './elements.js'
import {diffDates, diffToHtml} from './diffDates.js';
import {interfaceUnit} from './interface.js'

dateCalcForm.addEventListener("submit", handleCalcDates);

datecalcBlock.addEventListener('click', () => {
  interfaceUnit(dateCalcForm, timerForm)
})

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
      dateCalcResult.innerHTML = diffToHtml(diffDates(firstDate, secondDate))
    } else {
      dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
    }
}