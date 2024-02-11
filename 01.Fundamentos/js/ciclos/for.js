const heros = ['Batman', 'Superman', 'Aquaman'];

console.warn('For ');

for (let i= 0; i<heros.length; i++) {
    console.log(heros[i]);
}

console.warn('For in');
for(let i in heros) {
    console.log(heros[i])
}

console.warn('For of');
for(let hero of heros) {
    console.log(hero)
}