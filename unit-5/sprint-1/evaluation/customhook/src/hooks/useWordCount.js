import { useState, useEffect } from "react";

const useWordCount = (initialText='') => {
  const [text, setText] = useState(initialText);
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    const countWords = () => {
      const words = text.trim().split(/\s+/);
      if (text.trim() === '') {
        setWordCount(0);
      } else {
        setWordCount(words.length);
      }
    };

    countWords();
  }, [text]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return { text, wordCount, handleTextChange };
};

export default useWordCount;
