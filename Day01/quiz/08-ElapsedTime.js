/**
 * hitung detik ke dalam day, hour, minute and seconds
 */


function getPeriodTimes(seconds) {
    if (typeof seconds !== 'number' && typeof seconds !== 'string') {
        return "Input harus berupa angka.";
    }


    seconds = typeof seconds === 'number' ? seconds : parseInt(seconds, 10);


    if (isNaN(seconds)) {
        return "Input bukan angka, coba lagi...";
    }


    var days = Math.floor(seconds / (24 * 3600));
    var hours = Math.floor((seconds % (24 * 3600)) / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    var remainingSeconds = seconds % 60;

    return days + " hari " + hours + " jam " + minutes + " menit " + remainingSeconds + " detik";

}

console.log(getPeriodTimes("700005A")); //700005A is not number
console.log(getPeriodTimes("700005")); //8 hari 2 jam 26 menit 45 detik