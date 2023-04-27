import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <img src="/logo.jpg" alt="dsg" />
      <h3>Disguised Gaming Fansite</h3>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Challenger Team</a>
        </li>
        <li>
          <a href="#">Gamer Changers Team</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
