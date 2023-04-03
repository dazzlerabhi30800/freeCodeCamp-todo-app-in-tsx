import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todolist = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos.map((todo, index) => (
        <SingleTodo todo={todo} todos={todos} key={index} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default Todolist;
