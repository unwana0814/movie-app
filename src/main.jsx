import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './App'

// ReactDOM.render(<App />, document.getElementById('root'));
// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// ReactDOM.render(<App />);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />);

