// page d'accueil

// Comprend la barre de navigation et le contenu de la page d'accueil de l'application
// Est appelé par src/App.jsx

// Affiche en dur bonjour John Doe en attendant le systeme d'authentification
// Affiche en dur les 3 derniers objets ajoutés en attendant le systeme de gestion des objets

// Structure

const HomePage = () => {
  return (
    <div>
      <h1>Bonjour John Doe</h1>
      <h2>Les 3 derniers objets ajoutés</h2>
      <ul>
        <li>Objet 1</li>
        <li>Objet 2</li>
        <li>Objet 3</li>
      </ul>
    </div>
  );
};

export default HomePage;
