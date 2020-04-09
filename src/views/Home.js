import React, { useEffect, useState } from 'react';
import { fetchData } from 'helpers/api';
import MainTemplate from 'templates/MainTemplate';
import Panel from 'components/home/panel/Panel';

const Home = () => {
  const [newBooks, setNewBooks] = useState([]);

  const getData = async () => {
    const data = await fetchData({ type: 'books' });
    setNewBooks(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <MainTemplate>
      <div className="columns">
        <div className="column">
          <Panel label="New" items={newBooks} />
        </div>
        <div className="column" />
      </div>
    </MainTemplate>
  );
};

export default Home;
