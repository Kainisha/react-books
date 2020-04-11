import React, { useEffect, useState } from 'react';
import { fetchData } from 'helpers/api';
import MainTemplate from 'templates/MainTemplate';
import Panel from 'components/home/panel/Panel';

const Home = () => {
  const [newBooks, setNewBooks] = useState([]);
  const [error, setError] = useState('');

  const getData = async () => {
    const data = await fetchData({ type: 'books' });

    if (!data.error) {
      setNewBooks(data);
      return;
    }
    setError(data.error);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <MainTemplate>
      <>
        {error.trim() !== '' && <div className="notification is-danger">{error}</div>}
        <div className="columns">
          <div className="column">
            <Panel label="New" items={newBooks} />
          </div>
          <div className="column" />
        </div>
      </>
    </MainTemplate>
  );
};

export default Home;
