import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex items-center justify-center">
      <Link
        to="shop"
        className="absolute cursor-pointer text-center text-8xl font-bold uppercase text-orange-500"
      >
        <h2>Shop Now!</h2>
      </Link>
      <img
        className="min-h-screen object-cover"
        src="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LeagueofLegends_RiotGames_S1_2560x1440-ee500721c06da3ec1e5535a88588c77f"
      />
    </div>
  );
}

export default Home;
