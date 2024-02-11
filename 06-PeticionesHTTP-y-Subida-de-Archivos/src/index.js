// import { init } from "./js/jokes-page";
// init();


// import { obtenerUsuarios } from "./js/http-provider";
// import { init } from "./js/users-page";
// init();

import * as CRUD from './js/crud-provider';
CRUD.createUser({
    name: 'Laysson',
    job: 'Developer'
}).then(console.log);

CRUD.updateUser(1,{
    name: 'Jose',
    job: 'Chef'
}).then(console.log);

CRUD.deleteUser(1).then(console.log);