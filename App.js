import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setusers] = useState()
  useEffect(async() => {
  let result= await axios.get("https://jsonplaceholder.typicode.com/users")
 setusers(result.data)
  }, [])
  return (
    <div className="App">
    {users.map(el=><div>
      <h1>{el.name}</h1>
    </div>)}
    </div>
  );
}

export default App;
