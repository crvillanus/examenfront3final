import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './modules/Card.module.css';
import defaultImg from '../images/doctor.jpg';

const Card = ({ name, id, photo, addToFav, removeFav }) => {
  const imageUrl = photo || defaultImg;

  return (
    <div className={styles.card}>
      <img
        src={imageUrl}
        alt={`${name}'s profile`}
        className={styles.photo}
      />
      <h3 className={styles.name}>{name}</h3>
      <Link to={`/dentista/${id}`} className={styles.detailsLink}>
        Más info ❤
      </Link>
      {addToFav && <button onClick={() => addToFav({ id, name, photo })}>Agregar a Favoritos</button>}
      {removeFav && (
        <button
          className={`${styles.button} ${styles.removeBtn}`}
          onClick={() => removeFav(id)}
        >
          Remove
        </button>
      )}
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  photo: PropTypes.string,
  addToFav: PropTypes.func,
  removeFav: PropTypes.func,
};

export default Card;