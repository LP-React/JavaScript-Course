import {ToDo, ToDoList} from './classes'
import { createToDoHtml } from './js/componentes';

import './style.css';

export const todoList = new ToDoList();
todoList.toDos.forEach(createToDoHtml);

console.log('todos:' , todoList.toDos)