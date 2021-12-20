function hasMoreVowels(word) {
    let checkArr = []
    let vowels = []
    let con = []
    for (i = 0; i < word.length; i++) {
        checkArr.push(word[i])
    }
    for (i = 0; i < checkArr.length; i++) {
        switch (checkArr[i]) {
            case "a":
                vowels.push(checkArr[i]);
                break;
            case "e":
                vowels.push(checkArr[i]);
                break;
            case "i":
                vowels.push(checkArr[i]);
                break;
            case "o":
                vowels.push(checkArr[i]);
                break;
            case "u":
                vowels.push(checkArr[i]);
                break;
            default:
                con.push(checkArr[i])
        }
    }
    if (vowels.length > con.length) {
        return true
    } else {
        return false
    }
}

console.log(hasMoreVowels("yay"))