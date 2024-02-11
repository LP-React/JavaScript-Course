const cars = ['Ford', 'BWM', 'Chevrolet'];

console.warn('While')
let i = 0;

while (cars[i]) {
    if (i === 1) {
        i++;
        continue;
    }
    console.log(cars[i])
    i++;
}

console.warn('Do-While');
let j = 0;

do {
    console.log(cars[j]);
    j++;
} while (cars[j]);
