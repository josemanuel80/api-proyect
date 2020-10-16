import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const [searchString, setSearchString] = useState('');
  const history = useHistory();

  const handleChange = (event) => {
    const searchItem = event.currentTarget.value;
    setSearchString(searchItem);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/results/${searchString.toLowerCase()}`);
  };

  return (
    <main>
      <section className="container-search">
        <h3>Encuentra tu playa favorita y disfruta.</h3>

        <form method="get" action="/" onSubmit={handleSubmit}>
          <label htmlFor="search"></label>
          <input className="input"
            type="search"
            id="search"
            placeholder="Buscar localidades.."
            value={searchString}
            onChange={handleChange}
          />
          <button className="btn" type="submit"></button>
        </form>
      </section>
    </main>
  );
};

export default Home;
