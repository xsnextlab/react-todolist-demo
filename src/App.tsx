import React, { useState } from "react";
import { text } from "stream/consumers";
import ListItem from "./components/listItem";

const App = () => {
  const [list, setList] = useState<Array<string>>([]);
  const [textFieldValue, setTextFieldValue] = useState("");

  const myNumber = 1 + 3;

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={textFieldValue}
        onChange={(e) => setTextFieldValue(e.target.value)}
      />
      <button
        onClick={() => {
          setList((prev) => {
            setTextFieldValue("");
            return [...prev, textFieldValue];
          });
        }}
      >
        Add
      </button>
      <ul>
        {list.map((item, index) => {
          return (
            <ListItem
              text={item}
              onChange={(newValue) => {
                setList((prev) => {
                  const newArr = prev.slice();
                  newArr[index] = newValue;
                  return newArr;
                });
              }}
              onDelete={() => {
                setList((prev) => {
                  const newArr = prev.slice();
                  newArr.splice(index);
                  return newArr;
                });
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default App;
