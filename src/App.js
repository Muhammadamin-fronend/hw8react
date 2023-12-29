import React, { useState, useEffect } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [texts, setTexts] = useState(() => {
    const storedList = localStorage.getItem('list');
    return storedList ? JSON.parse(storedList) : [];
  });

  const handleClick = () => {
    setTexts((prevTexts) => [...prevTexts, inputText]);
    setInputText('');
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(texts));
  }, [texts]);

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleClick}>add name</button>
      {Array.isArray(texts) && texts.map((text, index) => (
        <h1 key={index}>{text}</h1>
      ))}
    </div>
  );
}

export default App;
