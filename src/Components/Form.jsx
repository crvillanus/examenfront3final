import { useState } from 'react';
import styles from './modules/Form.module.css';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setError('Todos los campos son obligatorios');
      setSuccess('');
      return;
    }

    if (formData.name.length < 5) {
      setError('El nombre debe tener al menos 5 caracteres');
      setSuccess('');
      return;
    }

    if (formData.email.length < 5) {
      setError('El correo debe tener al menos 5 caracteres');
      setSuccess('');
      return;
    }

    setError('');
    setSuccess('Formulario enviado con éxito');
    console.log('Formulario enviado:', formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <label htmlFor="name">Nombre completo</label>
        <input
          id="name"
          type="text"
          placeholder="Nombre completo"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>{success}</p>}
      <button type="submit" className={styles.submitButton}>Enviar</button>
    </form>
  );
};

export default Form;