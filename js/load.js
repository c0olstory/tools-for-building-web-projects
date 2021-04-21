// не совсем понял насчет:
// "Первым аргументом loadScript будет принимать или callback или строку или массив строк"
// Реализовал только если будет строка или массив строк
// вроде получилось избежать совпадений, если в массиве(url) будут повторяться значения
function result(i) {
   console.log(i)
}

function loadScript(url, callback) {   
   let uniqueUrl = [];
   if(Array.isArray(url)){
      url.forEach(function(item) {
         if(uniqueUrl.indexOf(item)) {
            uniqueUrl.push(item)
            const element = document.createElement("script");
            element.type = "text/javascript";
            element.src = item;
            element.onload = callback(element);
            document.body.appendChild(element);
         } 
       });
   } else {
      if(uniqueUrl.indexOf(url)) {
         const element = document.createElement("script");
         element.type = "text/javascript";   
         element.src = url;
         element.onload = callback(element);
         document.body.appendChild(element); 
      }
   } 
} 

loadScript(['1', '2', '1', '3'], result)

// loadScript('1', result)

   


