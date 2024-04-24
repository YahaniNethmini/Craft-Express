import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "../assets/Logo.png";
import "./Nav.css"

function Nav(){
    return(
        <table className="custom-table-nav">
            <tbody>
                <tr>
                    <td>
                        <div className="logo-container">
                            <img src={Logo} alt="logo" className="logo-image" />
                            <h2 style={{ color: "#532403" }} className="logo-name">CraftExpress</h2>
                        </div>
                    </td>
                    <td>
                        <Link to="/Home" className="btn1">Home</Link> {/* Use Link instead of Navigate */}
                    </td>
                    <td>
                        <Link to="/About" className="btn2">About</Link>
                    </td>
                    <td>
                    <Link to="/Shop" className="btn3">Shop</Link>
                    </td>
                    <td>
                        <Link to="/Contact" className="btn4">Contact</Link>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Nav;
