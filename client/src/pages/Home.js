import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <main>
      <div className="parent">
      <div>
        <h1>Sign up to VOTE and see the poll results!</h1>
        <Link id="background" to="/signup"></Link>
      </div>
      </div>
    </main>
  );
};

export default Home;
