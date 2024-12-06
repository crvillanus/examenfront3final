import styles from './modules/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Powered by</p>
      <img src="./img/DH.png" alt='DH-logo' />
    </footer>
  );
}

export default Footer;