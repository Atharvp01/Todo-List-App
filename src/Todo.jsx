import styled from "styled-components";
import { useState } from "react";

const Todo = () => {
  const [userInput, setUserInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTask = () => {
    const newTodoList = [...todoList, userInput];
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
        <TaskContainer>{todoList}</TaskContainer>
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
  background-color: #f8e042;
`;

export default Todo;
