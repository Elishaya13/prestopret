// page des objets
import axios from 'axios';
import { useEffect, useState } from 'react';

const ObjectsPage = () => {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    // Faire une requête GET pour récupérer la liste des objets
    axios
      .get('http://localhost/backprestopret/api.php')
      .then((response) => {
        setObjects(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des objets:', error);
      });
  }, []);

  return (
    <div>
      <h1>Les objets</h1>
      <h2>Liste des objets</h2>
      <ul>
        {objects.map((object) => (
          <li key={object.id}>{object.object_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ObjectsPage;
