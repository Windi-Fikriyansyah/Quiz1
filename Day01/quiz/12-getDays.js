/** Display year is kabisat and display month */

function getDays(month, year) {
    if (typeof month !== 'number' || typeof year !== 'number') {
        return "Input bulan dan tahun harus dalam bentuk integer.";
    }


    if (month < 1 || month > 12) {
        return "Input bulan harus antara 1 hingga 12.";
    }


    var daysInMonth;
    if (month === 2) {

        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            daysInMonth = 29;
        } else {
            daysInMonth = 28;
        }
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        daysInMonth = 30;
    } else {
        daysInMonth = 31;
    }


    var isLeapYear = ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);


    var monthName;
    switch (month) {
        case 1:
            monthName = "Januari";
            break;
        case 2:
            monthName = "Februari";
            break;
        case 3:
            monthName = "Maret";
            break;
        case 4:
            monthName = "April";
            break;
        case 5:
            monthName = "Mei";
            break;
        case 6:
            monthName = "Juni";
            break;
        case 7:
            monthName = "Juli";
            break;
        case 8:
            monthName = "Agustus";
            break;
        case 9:
            monthName = "September";
            break;
        case 10:
            monthName = "Oktober";
            break;
        case 11:
            monthName = "November";
            break;
        case 12:
            monthName = "Desember";
            break;
    }

    var output = "Bulan " + monthName + " memiliki " + daysInMonth + " hari.";
    if (isLeapYear) {
        output += " " + year + " adalah tahun kabisat.";
    }

    return output;
}

console.log(getDays("a", 2021)); //inputan bulan harus dalam integer
console.log(getDays("2", "year")); //inputan tahun harus dalam integer
console.log(getDays("m", "year")); //inputan bulan & tahun harus dalam integer
console.log(getDays(2, 2000)); //This month has 29 days, 2000 adalah tahun kabisat
console.log(getDays(8, 2021)); //This month has 31 hari