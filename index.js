class Formatter {
  //add static methods here
  static capitalize(string) {
    const firstChar = string[0]
    const rest = string.slice(1)
    return firstChar.toUpperCase() + rest
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    let stringArr = string.split(' ');
    // const words = /a|an|but|of|and|for|at|by|from/g;
    const words = ['a', 'an', 'the', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    
    let result = []
    const newWord = stringArr[0][0].toUpperCase() + stringArr[0].slice(1)
    result.push(newWord);

    for (let i = 1; i < stringArr.length; i++) {
      if (words.includes(stringArr[i])) {
        result.push(stringArr[i]);
      } else {
        const newWord = stringArr[i][0].toUpperCase() + stringArr[i].slice(1).toLowerCase();
        result.push(newWord);
      }
    }
    return result.join(' ')
  }
}


// console.log(Formatter.sanitize('He#ather!!'))
// console.log(Formatter.capitalize('happy unicorn'))
console.log(Formatter.titleize('my favorite pony is a purple one from the moon'))
console.log(Formatter.titleize('a tale of Two cities'))
