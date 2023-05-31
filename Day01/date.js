const today = new Date()
console.log(today);

console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getTime());
console.log(today.getUTCDate());

const day = new Date('2021-01-30')
console.log(day);

const day1 = new Date(2021,0,30)
console.log(day1);

const format = new Intl.DateTimeFormat('id-ID').format(today)
console.log(format);

console.log(today.toString());
console.log(today.toTimeString());
console.log(today.toUTCString());
console.log(today.toISOString());