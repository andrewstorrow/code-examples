function palindrome(str) {
    //Remove all non-alphanumeric characters (punctuation, spaces and symbols)
    var cleanStr = str.replace(/\W|_/g, "").toLowerCase();
    if (reverseString(cleanStr) === cleanStr) {
        return true;
    }
    else {
        return false;
    }
}

//Reverse string by looping through it and building a new string
function reverseString(str) {
    var reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}