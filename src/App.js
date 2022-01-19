import React, { useRef } from 'react';

import './App.css';

const App = () => {
  const textInputRef = useRef();

  const focusOnInput = () => textInputRef.current.focus();

  return (
    <div>
      <input
        ref={textInputRef}
        type="text"
      />
      <button onClick={focusOnInput}>
        Ustaw focus na input
      </button>
    </div>
  );
}

export default App;
