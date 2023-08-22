import React from "react";
import "./styles.css";

interface Props{
    todo:String,
    setTodo:React.Dispatch<React.SetStateAction<String>>;
}

function InputField({todo, setTodo}: Props) {
  return (
    <form className="input">
      <input
        type="input"
        placeholder="Enter a Task"
        className="input_box"
      ></input>

      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
}

export default InputField;
