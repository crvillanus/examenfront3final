import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from '../Components/modules/Detail.module.css';

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    const fetchDentist = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.json();
      setDentist(data);
    };
    fetchDentist();
  }, [id]);

  return (
    dentist ? (
      <div className={styles.detailContainer}>
        <h1>{dentist.name}</h1>
        <table className={styles.detailTable}>
          <tbody>
            <tr>
              <th>Email</th>
              <td>{dentist.email}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{dentist.phone}</td>
            </tr>
            <tr>
              <th>Website</th>
              <td><a href={`http://${dentist.website}`} target="_blank" rel="noopener noreferrer">{dentist.website}</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    ) : <p>Loading...</p>
  );
};

export default Detail;