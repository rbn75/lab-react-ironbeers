import React from 'react';
import { Link } from 'react-router-dom';



function NavBar() {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-light">
      <Link className="link" to="/">
        <img width="20px" src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/blue_repicthousebase_1484336386-1.png" />
      </Link>
      <Link className="link" to="/beers">
        Beer's List
      </Link>
      <Link className="link" to="/randombeer">
        Random
      </Link>
      <Link className="link" to="/newbeer">
        Add Beer
      </Link>
    </div>
  );
}

export default NavBar;