import styled from "styled-components";
import { useState } from "react";

const Todo = () => {
  const [userInput, setUserInput] = useState("Hello");

  const addTask = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <>
      <InputField>
        <input type="text" onChange={addTask} />
        <button
          style={{
            marginTop: "1rem",
            padding: "5px",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add Task
        </button>
      </InputField>
      <TaskContainer>{userInput}</TaskContainer>
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

const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
`;

export default Todo;
