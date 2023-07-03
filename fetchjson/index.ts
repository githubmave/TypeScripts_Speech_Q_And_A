import axios from "axios";
import { NoSubstitutionTemplateLiteral } from "typescript";

// consuming the Fake API using axios
const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
   id: number;
   title: string;
   completed: boolean;
}

axios.get(url).then(response => {
  console.log(response.data);

  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  // console.log(`The Todo with ID: ${id}, has a title of : ${title} , Is it finished?  ${completed}`);

  logTodo(id,title, completed);

});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log ( `the todo id ${id}`);
};



