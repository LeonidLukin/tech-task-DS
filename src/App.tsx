import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const API_URL = 'https://636bd1aa7f47ef51e13b4541.mockapi.io/api';
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`${API_URL}/products`)
    .then((response) => response.json())
    .then((json) => setProducts(json));
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {products.map((product:any) => <div>{product.color}</div>)}
    </div>
  );
}

export default App;
