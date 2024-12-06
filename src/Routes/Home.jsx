import { useContext, useEffect } from 'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context';

const Home = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  useEffect(() => {
    const fetchDentists = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        const sortedData = data.sort((a, b) => a.id - b.id);
        dispatch({ type: 'SET_DATA', payload: sortedData });
      } catch (error) {
        console.error('Error fetching dentist data:', error);
      }
    };

    if (!state.data || state.data.length === 0) {
      fetchDentists();
    }
  }, [state.data, dispatch]);

  const addToFav = (dentist) => {
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    if (!favs.some(fav => fav.id === dentist.id)) {
      favs.push(dentist);
      localStorage.setItem('favs', JSON.stringify(favs));
      alert(`${dentist.name} added to favorites!`);
    } else {
      alert(`${dentist.name} is already in favorites!`);
    }
  };

  if (!state.data || state.data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className="card-grid">
        {state.data.map((dentist) => (
          <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} addToFav={addToFav} />
        ))}
      </div>
    </main>
  );
};

export default Home;