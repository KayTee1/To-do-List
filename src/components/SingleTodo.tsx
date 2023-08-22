import React from "react";
import { Todo } from "../models/models";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
//AiFillDelete
//MdOutlineDone
//AiFillEdit

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  };

  return (
    <form className="todos_single">
      {todo.isDone ? (
        <s className="todos_single-text">{todo.todo}</s>
      ) : (
        <span className="todos_single-text">{todo.todo}</span>
      )}

      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <MdOutlineDone onClick={() => handleDone(todo.id)} />
        </span>
        <span className="icon">
          <AiFillDelete onClick={() => handleDelete(todo.id)} />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
