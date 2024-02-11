const nombres = ['Mario', 'José', 'María'];
console.log(nombres);
console.log(nombres[0]);

let cosas = [
    true,
    123,
    'LP',
    1 + 5,
    function () { },
    () => { },
    { a: 1 },
    ['x', 'Y', 'O', ['X1', 'Y1']],
];
console.log(cosas[7][3][1]);
console.log(cosas);
