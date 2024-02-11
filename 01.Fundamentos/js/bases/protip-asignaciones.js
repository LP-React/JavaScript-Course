const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;
const soyTrue = true;

const a1 = false && 'Hola Mundo' && false && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso';
const a5 = soyFalso || soyUndefined || soyTrue || 'Ya no soy falso de nuevo' || true;

console.log({ a1, a2, a3, a4, a5 });