import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const DentistDetails = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setDentist(response.data);
      })
      .catch((error) => console.error("Error fetching dentist details: ", error));
  }, [id]);

  if (!dentist) return <div>Loading...</div>;

  return (
    <div>
      <h1>{dentist.name}</h1>
      <p>{dentist.username}</p>
      <p>{dentist.email}</p>
    </div>
  );
};

export default DentistDetails;
