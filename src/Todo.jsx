/* eslint-disable react/jsx-key */
import styled from "styled-components";
import { useState } from "react";
import { Slide } from "react-awesome-reveal";

const Todo = () => {
  const [userInput, setUserInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleOnChange = (event) => {
    setUserInput(event.target.value);
  };

  const addTask = () => {
    const newTodoList = [...todoList, userInput];
    setTodoList(newTodoList);
  };

  const handleDeleteTask = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  return (
    <>
      <InputField>
        <Input
          type="text"
          onChange={handleOnChange}
          placeholder="Task Name"
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
            {todoList.map((todo, index) => {
              return (
                <Slide direction="up" triggerOnce="true">
                  <li key={index}>
                    {todo}
                    <button onClick={() => handleDeleteTask(index)}>
                      delete
                    </button>
                  </li>
                </Slide>
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
  button {
    background-color: #541025;
    color: antiquewhite;
  }
`;

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  height: 70vh;
`;

const Input = styled.input`
  border: none;
  padding: 10px;
  width: 50vw;
  border-radius: 4px;
`;

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
      height: auto;
      font-size: 2rem;
      border-radius: 7px;
      padding: 1rem 0 1rem 1rem;
      button {
        border: none;
        font-size: 1.25rem;
        border-radius: 4px;
        cursor: pointer;
        background-color: #c94e3b;
      }
    }
  }
`;

export default Todo;
