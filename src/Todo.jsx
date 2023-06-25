import styled from "styled-components";
import { useState } from "react";

const Todo = () => {
  const [userInput, setUserInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTask = () => {
    const newTodoList = [...todoList, userInput];
    setTodoList(newTodoList);
  };

  const handleDeleteTask = () => {
    const newTodoList = [...todoList];
    newTodoList.pop();
    setTodoList(newTodoList);
  };

  return (
    <>
      <InputField>
        <Input
          type="text"
          onChange={(event) => setUserInput(event.target.value)}
          placeholder="Add Task"
          value={userInput}
        />
        <button
          style={{
            marginTop: "1rem",
            padding: "5px",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={addTask}
        >
          Add Task
        </button>
      </InputField>
      <TodoContainer>
        <TaskContainer>
          <ul>
            {todoList.map((todo) => {
              return (
                <li>
                  {todo} <button onClick={handleDeleteTask}>delete</button>
                </li>
              );
            })}
          </ul>
        </TaskContainer>
      </TodoContainer>
    </>
  );
};

const InputField = styled.div`
  background-color: #441d50;
  height: 30vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 70vh;
`;

const Input = styled.input``;

const TaskContainer = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-left: 1rem;
      color: #552d2c;
      background-color: #f8e042;
      margin-top: 1rem;
      width: 60vw;
      height: 50px;
      font-size: 2rem;
      border-radius: 7px;
      button {
        border: none;
        font-size: 1.25rem;
        border-radius: 4px;
        cursor: pointer;
        background-color: #c94e3b;
        padding: 12px;
      }
    }
  }
`;

export default Todo;
