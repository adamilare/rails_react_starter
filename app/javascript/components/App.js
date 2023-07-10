// import React from 'react';

// function App() {
//   return <h1>Hello World, component 2!</h1>;
// }

// export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';

function App() {
  return (
    <Routes>
      <Route index element={<Greeting />} />
      <Route path="/greeting" component={Greeting} />
    </Routes>
  );
}

export default App;
