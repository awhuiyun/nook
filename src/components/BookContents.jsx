import React, { useEffect, useState } from "react";
import axios from "axios";
import NotionContentRenderer from "./NotionContentRenderer";
import LoadingSpinner from "./LoadingSpinner";

export default function BookContents({
  isBought,
  percentToObfuscate,
  notionPageId,
}) {
  const percentOfBookToObfuscate = parseFloat(percentToObfuscate) / 100;

  // Fetch notion content
  const [bookData, setBookData] = useState([]);
  const [obfuscatedBookData, setObfuscatedBookData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Function to obfuscate data
  function obfuscateData(data) {
    const characters = "abcdefghijklmnopqrstuvwxyz";

    if (data.length > 0) {
      for (let i = 0; i <= data.length - 1; i++) {
        // Calculate the percent of book
        const percentOfBook = i / data.length;

        // Probability of obfuscation for each word in the block. It increases with % of book.
        const probabilityOfObfuscate = Math.floor(percentOfBook * 10) / 10;

        if (
          data[i].type !== "heading_1" &&
          percentOfBook >= 1 - percentOfBookToObfuscate
        ) {
          let editedContent = "";
          for (let j = 0; j <= data[i].content.length - 1; j++) {
            // For each letter in the block, calculate if it will be obfuscated
            const randNum = Math.random();
            if (
              data[i].content[j].match(/[a-z]/i) &&
              randNum <= probabilityOfObfuscate
            ) {
              if (data[i].content[j] === data[i].content[j].toUpperCase()) {
                const randChar = characters
                  .charAt(Math.floor(Math.random() * characters.length))
                  .toUpperCase();
                editedContent += randChar;
              } else {
                const randChar = characters
                  .charAt(Math.floor(Math.random() * characters.length))
                  .toLowerCase();
                editedContent += randChar;
              }
            } else {
              editedContent += data[i].content[j];
            }
          }
          setObfuscatedBookData((prevState) => {
            return [
              ...prevState,
              { type: data[i].type, content: editedContent },
            ];
          });
        } else {
          setObfuscatedBookData((prevState) => {
            return [
              ...prevState,
              { type: data[i].type, content: data[i].content },
            ];
          });
        }
      }
    }
  }

  // GET request function to backend to fetch data
  function getData() {
    setIsLoading(true);

    axios
      .get("http://localhost:5000/notion-data", {
        params: {
          id: notionPageId,
        },
      })
      .then((res) => {
        setBookData(res.data);
        obfuscateData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Call GET request on mount
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="text-zinc-700">
      {isLoading ? (
        <div className="text-center">
          <LoadingSpinner />
        </div>
      ) : isBought ? (
        <NotionContentRenderer data={bookData} />
      ) : (
        <NotionContentRenderer data={obfuscatedBookData} />
      )}
    </div>
  );
}
