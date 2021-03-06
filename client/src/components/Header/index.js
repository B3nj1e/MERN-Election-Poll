import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="text-light mb-4 py-3 flex-row align-center " >
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div id="title">
          <Link className="text-light" to="/">
            <h1 className="m-0">2022 SA State Election Poll</h1>
          </Link>

        </div>
        <div id="navbuttons">
          {Auth.loggedIn() ? (
            <>
              <span>Hey {Auth.getProfile().data.username}!</span>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
              <Link className="btn btn-lg btn-light m-2" to="/results">
                Results
              </Link>
            </>
          ) : (
            <>

              <p className="m-0">Sign up to vote in the poll and view the results!</p>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/results">
                Results
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};



export default Header;
