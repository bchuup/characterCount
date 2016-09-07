var object = {}

function countLetters(str){
  var arr = str.split(" ").join("");
  for (var letter of arr) {
    // karray = Object.keys(object)
    // console.log(karray)
    if (letter in object){
    object[letter] += 1
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
