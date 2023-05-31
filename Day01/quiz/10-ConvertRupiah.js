/**
 * Convert rupiah to other currency
 */

function convertToRupiah(money, type) {
    if (typeof money !== 'number') {
        return "Jumlah harus berupa angka.";
    }

    // Daftar kurs tukar
    var exchangeRates = {
        yen: 130.12,
        usd: 14382.50,
        euro: 16000
    };

    // Mengkonversi menjadi Rupiah
    if (type in exchangeRates) {
        var convertedMoney = money * exchangeRates[type];
        var formattedMoney = convertedMoney.toLocaleString("id-ID", { type: "IDR" });
        return money + " " + type + " = " + formattedMoney;
    } else {
        return "no match type currency";
    }
}

console.log(convertToRupiah(1000, 'yen')); //1000 yen  = Rp.130.120
console.log(convertToRupiah(100, 'usd')); //100 dollar  = Rp.1.438.250
console.log(convertToRupiah(100, 'euro')); //100 dollar  = Rp.1.600.000
console.log(convertToRupiah(100, '')); //no match type currency