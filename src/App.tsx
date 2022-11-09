import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const API_URL = 'https://636bd1aa7f47ef51e13b4541.mockapi.io/api';
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then((json) => setUsers(json));
  })

  return (
    <div className="App">
      {users.map((user:any) => <div>{user.firstName}</div>)}
    </div>
  );
}

export default App;
