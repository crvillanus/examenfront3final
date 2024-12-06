import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './modules/Navbar.module.css';

const Navbar = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <nav className={`${styles.navbar} ${theme === 'light' ? styles.light : styles.dark}`}>
      <div className={styles.logo}>DH </div>
      <div className={styles.navLinks}>
        <Link to="/">Home</Link>
        <Link to="/favs">Favs</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className={styles.themeToggle}>
        <button onClick={toggleTheme}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;