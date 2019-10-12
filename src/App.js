import React from 'react';
import Panel from './components/Panel.js';

function App() {
  return (
    <div className={"App"}>
      <Panel color={'red'} isSelected={false} />
    </div>
  );
}

export default App;
