// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Layout from './components/Layout';
import LoansPage from './pages/LoansPage';
import BorrowersPage from './pages/BorrowersPage';
import ObjectsPage from './pages/ObjectsPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='loans' element={<LoansPage />} />
          <Route path='objects' element={<ObjectsPage />} />
          <Route path='borrowers' element={<BorrowersPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// function App() {
//   const [count, setCount] = useState(0);
//   const [objects, setObjects] = useState([]);

//   useEffect(() => {
//     // Faire une requête GET pour récupérer la liste des objets
//     axios
//       .get('http://localhost/backprestopret/api.php')
//       .then((response) => {
//         setObjects(response.data);
//       })
//       .catch((error) => {
//         console.error('Erreur lors de la récupération des objets:', error);
//       });
//   }, []);

//   return (
//     <>
//       <div>
//         <a href='https://vite.dev' target='_blank'>
//           <img src={viteLogo} className='logo' alt='Vite logo' />
//         </a>
//         <a href='https://react.dev' target='_blank'>
//           <img src={reactLogo} className='logo react' alt='React logo' />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className='card'>
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//       </div>
//       <h2>Liste des Objets</h2>
//       <ul>
//         {objects.map((object) => (
//           <li key={object.id}>{object.object_name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
