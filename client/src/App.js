import './App.css';
import axios from 'axios';
import {useState, useEffect } from 'react';
import { Router, Link } from '@reach/router';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import List from './components/List';
import Create from './components/Create';
import Show from './components/Show';
import Edit from './components/Edit';

function App() {

  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/pets")
      .then(response => setPets(response.data))
      .catch(err => console.log(err))
  }, []);

  const addPet = (pet) => {
    setPets([...pets, pet]);
  }

  // const showNote = (id) => {
  //   setNotes(notes.findOne (note => note._id !== id));
  // }

  const deletePet = (id) => {
    setPets(pets.filter(pet => pet._id !== id));
  }
  
  return (
    <div className="App">
      <h1>WELCOME</h1>
      <div>
        <Link to="/">Show all</Link> |
        <Link to="/new">Create Note</Link>
      </div>
      <Router>
        <List path="/" pets={pets} deletePet={deletePet} />
        <Create path="/new" addPet={addPet} />
        <Show path="/pets/:id"  />
        <Edit path='/edit/:id'/>
      </Router>
    </div>
  );
}

export default App;