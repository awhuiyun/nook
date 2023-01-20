import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const characterArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const [data, setData] = useState([]);
  const [editedData, setEditedData] = useState([]);

  // GET request to backend
  function getData() {
    axios
      .get("http://localhost:3000/notion-data", {
        params: {
          id: "c47e8eba8c5e4e18ae760376a7a4a67e",
        },
      })
      .then((res) => setData(res.data));
  }

  console.log(data);
  // To obstrucate the data
  useEffect(() => {
    if (data.length > 0) {
      for (let i = 0; i <= data.length - 1; i++) {
        let editedContent = "";
        for (let j = 0; j <= data[i].content.length - 1; j++) {
          if (data[i].content[j].match(/[a-z]/i)) {
            const randIndex = Math.floor(Math.random() * (25 - 0) + 0);
            const randChar = characterArray[randIndex];
            editedContent += randChar;
          } else {
            editedContent += data[i].content[j];
          }
        }
        setEditedData((prevState) => {
          return [...prevState, editedContent];
        });
      }
    }
  }, [data]);

  console.log(editedData);

  return (
    <div>
      <button onClick={getData}>Get data</button>
      {data.map((block) => {
        return <p>{block.content}</p>;
      })}
    </div>
  );
}

export default App;
