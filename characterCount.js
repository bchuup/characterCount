var object = {}

function countLetters(str){
  var arr = str.split(" ").join("");
  for (var letter of arr) {
    if (letter in object){
    object[letter] = str.indexOf(letter)
    } else {
      object[letter] = 1
    }
  }
  console.log(object)
  return object;
}


console.log(object)
countLetters("lighthouse in the house");
// return Object
