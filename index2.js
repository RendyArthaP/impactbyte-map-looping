const swapCase = (str) => {
  var newStr = '';
  
  for(let i = 0; i < str.length; i++) {
    if(str[i] === str[i].toLowerCase()) {
      newStr += str[i].toUpperCase()
    } else {
      newStr += str[i].toLowerCase();
    }
  }
  return newStr;
}

let str = "HALO semua, BELAJAR coding DI skilvul YUK";

console.log(swapCase(str))




