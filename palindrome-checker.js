function palindrome(str) {
    let word = str.replace(/[\W]|[_]/gm, "").toLowerCase();
    for (let i = 0, j = word.length - 1; i < word.length / 2; i++, j--) {
      if (word[i] != word[j]) {
        return false;
      }
    }
    return true;
  }
  
  console.log(palindrome("five|\_/|four"))