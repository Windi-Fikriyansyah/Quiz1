/**
 * input 4 digit integer lalu hitung jumlahnya
 */

function sumDigit(n) {
    if (typeof n !== 'number' && typeof n !== 'string') {
        return "Input harus berupa angka.";
    }


    n = typeof n === 'number' ? n.toString() : n;


    if (n.length !== 4) {
        return "harus lebih kecil dari 10000";
    }


    var sum = 0;
    for (var i = 0; i < n.length; i++) {
        var digit = parseInt(n[i], 10);
        if (isNaN(digit)) {
            return "is not number, try again...";
        }
        sum += digit;
    }

    return sum;
}

console.log(sumDigit(1234)); //10
console.log(sumDigit("1234")); //10
console.log(sumDigit(12345)); //12345 harus lebih kecil dari 10000
console.log(sumDigit("a123")); //a123 is not number, try again...