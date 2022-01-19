import React, { createRef, useRef } from 'react';

import './App.css';

const App = () => {
  const textInputRef = useRef();
  const numberInputRef = createRef();

  const focusOnInput = () => textInputRef.current.focus();

  console.log(textInputRef.current);
  console.log(numberInputRef.current);

  return (
    <div>
      <input
        ref={textInputRef}
        type="text"
      />
      <input
        ref={numberInputRef}
        type="number"
      />
      <button onClick={focusOnInput}>
        Ustaw focus na input
      </button>
    </div>
  );
}

export default App;
