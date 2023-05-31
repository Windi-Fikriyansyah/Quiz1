/** input 4 digit, cek apakah angka palindrome */

function isPalindrome(angka) {
    if (typeof angka !== 'number' && typeof angka !== 'string') {
        return "Input harus berupa angka.";
    }


    angka = typeof angka === 'number' ? angka.toString() : angka;


    angka = angka.replace(/\s/g, '').toLowerCase();


    var reversedNumber = angka.split('').reverse().join('');
    if (angka === reversedNumber) {
        return angka + " adalah palindrome.";
    } else {
        return angka + " bukan palindrome.";
    }
}


console.log(isPalindrome("abcd")); //abcd is not an number
console.log(isPalindrome("123a")); //123a is not an number
console.log(isPalindrome("1234")); //1234 is not palindrome
console.log(isPalindrome(1221)); //1221 is palindrome
console.log(isPalindrome("8888")); //8888 is palindrome