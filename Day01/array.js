const foods = ['sup','pizza','pasta']
console.log(foods);

if (Array.isArray(foods)) {
    console.log('Foods is array');
}

console.log(foods[2]);

foods.push('Seblak')
console.log(foods);
foods.pop()
console.log(foods);
foods.unshift('indomie')
console.log(foods);
foods.shift()
console.log(foods);
foods.sort()
console.log(foods);
foods.reverse()
console.log(foods);

const foods1 = ['snack','bakso']

const concat = foods.concat(foods1)

console.log(concat);


const programming = ['java','javascript','python','sql','oracle','postgres','oracle']

//  const db = programming.slice(3,6)
//  console.log(db);

//  console.log(programming);

// const db1 = programming.splice(3,6)
// console.log(db1);

// console.log(programming);

const [java,javascript,python,...database] = programming
console.log();

const number = [1,2,3,4,5]

const every = number.every(e => e % 2 === 0)
const some = number.some(e => e % 2 === 0)

console.log(every);
console.log(some);

console.log(programming.includes('vue'));
console.log(programming.indexOf('oracle'));
console.log(programming.lastIndexOf('oracle'));

const find = programming.find(e => e == 'oracle')

console.log(find);

