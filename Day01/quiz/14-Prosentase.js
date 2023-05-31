/** Buat program untuk menampilkan prosentasi dari income*/

function getProsentase(start, end) {
    if (typeof start !== 'number' || typeof end !== 'number') {
        return "harus dalam angka";
    }
    var incomeDifference = end - start;


    var percentage = (incomeDifference / start) * 100;


    var sign = incomeDifference >= 0 ? "+" : "-";


    percentage = Math.abs(percentage).toFixed(2);

    var output = "Total " + (incomeDifference >= 0 ? "kenaikan" : "penurunan") + " income " + sign + percentage + "%";

    return output;
}

console.log(getProsentase("abc", "bca")); //abc or bca harus dalam angka
console.log(getProsentase(600000.00, 750000.00)); //Total kenaikan income 25%
console.log(getProsentase(750000.00, 650000.00)); //Total penurunan income -14%