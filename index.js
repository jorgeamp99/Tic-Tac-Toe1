var playerSymbol = "X";
var solution = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
function removeElement(array, elementToRemove){
//   for( var i = 0; i < arr.length; i++){
//    if ( array[i] === elementToRemove) {
//      arr.splice(i, 1);
//    }
// }
if(array.includes(elementToRemove) === true){
  array.splice(array.indexOf(elementToRemove), 1);
}
}

function setEquality(array1, array2){
  var equal = true;
  for (var i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i]) === false){
      equal = false;
    }
  }
  for (var i = 0; i < array2.length; i++) {
    if(array1.includes(array2[i]) === false){
      equal = false;
    }
  }

  return equal

}

function randomNumberN(limit, exception){

  var num = Math.floor((Math.random() * limit) + 1);
  if(exception !== undefined){
  while (exception.includes(num) === true) {
    num = Math.floor((Math.random() * limit) + 1);
  }
}
return num
}

for (var i = 0; i < document.querySelectorAll("td").length; i++) {
  document.querySelectorAll("td")[i].addEventListener("click", function() {
       this.innerHTML = playerSymbol;


    }
  );
}
