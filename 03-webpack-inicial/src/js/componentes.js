import '../css/componentes.css';
// import webpacklogo from '../assets/img/logo-on-white-bg.png';

export const saludar = ( nombre ) => {

    console.log('Creando etiqueta h1, en el HTML!');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre } !`;

    document.body.append( h1 );

    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append(img);

}