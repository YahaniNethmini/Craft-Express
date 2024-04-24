import React from "react";
import './Home.css';
import HomePage from "../assets/HomePage.jpg";
import Nav from "./Nav.jsx"

function Home() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <img src={HomePage} alt="Background" className="bg-image" />
      <div> 
        <table className="custom-table">
          <tbody>
            <tr>
              <td className="column1">
                <h2 style={{ color: 'brown', fontSize: '20px'}} className="h1"><b>All Craft Are Made <br />With Love </b></h2>
              </td>
              <td className="column2">
                <p style={{ fontSize: '12px'}} className="font-container">Craft design for apps involves carefully crafting the user interface & experience to prioritize aesthetic, usability, and functionality. It entails designing intuitive layouts, selecting appealing colors & fonts, & incorporating visually engaging elements such as illustrations or animations. </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
