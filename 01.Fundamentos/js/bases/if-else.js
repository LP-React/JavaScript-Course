let a = 10;

if (a >= 10) {
    console.log('A is greater than or equal to 10')
} else {
    console.log('A is less than 10')
}

const hoy = new Date();
let day = hoy.getDay(); //0 : Sunday, 1: Monday ...
console.log({ day });

// = / == / ===
if (day === 0) {
    console.log('Today is sunday')
} else if (day === 1) {
    console.log('Today is monday')
} else if (day === 2) {
    console.log('Today is tuesday')
} else if (day === 3) {
    console.log('Today is wednesday')
} else if (day === 4) {
    console.log('Today is thursday')
} else if (day === 5) {
    console.log('Today is friday')
} else {
    console.log('Today is saturday')
}

let semana = {
    0: 'Sunday',
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday'
};
console.log(semana[day]);

let semana2 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(semana2[day]);