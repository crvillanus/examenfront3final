import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Components/Card';
import styles from '../Components/modules/Favs.module.css';

const Favs = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {

    const favs = JSON.parse(localStorage.getItem('favs')) || [];

    const uniqueFavs = Array.from(new Set(favs.map(fav => fav.id)))
      .map(id => favs.find(fav => fav.id === id));
    const sortedFavs = uniqueFavs.sort((a, b) => a.id - b.id);
    setFavorites(sortedFavs);
  }, []);

  const removeFav = (id) => {
    const updatedFavs = favorites.filter(fav => fav.id !== id);
    setFavorites(updatedFavs);
    localStorage.setItem('favs', JSON.stringify(updatedFavs));
  };

  if (favorites.length === 0) {
    return (
      <div className={styles.noFavoritesCard}>
        <h3>Agrega tus favoritos para verlos aquí</h3>
        <Link to="/" className={styles.goBackButton}>Regresa al Home</Link>
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favorites.map((dentist, index) => (
          <Card key={`${dentist.id}-${index}`} name={dentist.name} username={dentist.username} id={dentist.id} removeFav={removeFav} />
        ))}
      </div>
    </div>
  );
};

export default Favs;