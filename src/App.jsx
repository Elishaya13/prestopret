import { useState, useEffect } from 'react';
import axios from 'axios';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [objets, setObjets] = useState([]);

  useEffect(() => {
    // Faire une requête GET pour récupérer la liste des objets
    axios
      .get('http://localhost/backprestopret/api.php')
      .then((response) => {
        setObjets(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des objets:', error);
      });
  }, []);

  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <h2>Liste des Objets</h2>
      <ul>
        {objets.map((objet) => (
          <li key={objet.id}>{objet.nom_objet}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
