import React from 'react';
import { Link } from 'react-router-dom';



function HomePage() {
  return (
    <div className="container px-4 py-4">
      <h1>IronBeers</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam perspiciatis nisi aspernatur soluta repellat officia doloremque magnam, ab culpa laborum placeat harum accusamus ut voluptatum reiciendis omnis saepe, quam quis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti vero alias consectetur temporibus illum, voluptatibus rerum error nesciunt, fuga vitae repellat placeat fugit qui incidunt laborum tempora, delectus culpa nobis.
      </p>
      <div className="container beerBtn my-5">
        <div className="my-4">
          <Link to="/beers">
            <img  src="" />
            <h4>Beers List</h4>
          </Link>
        </div>
        <div className="my-4">
          <Link to="/randombeer">
          <img  src="" />
            <h4>Random Beer</h4>
          </Link>
        </div>
        <div className="my-4">
          <Link to="/newbeer">
          <img  src="" />
            <h4>Create your own</h4>
          </Link>
        </div>
      </div>
      
    </div>
  );
}

export default HomePage;