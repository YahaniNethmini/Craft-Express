import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import LogoCraftExpress from "../assets/LogoCraftExpress.png";
import './LogInPage.css';

function LogInPage() {
  return (
    <div>
      <table className="login-table">
        <tbody>
          <tr>
            <td className="img">
              <img src={LogoCraftExpress} alt="Craft Express Logo" />
            </td>
            <td className="log-in">
                <br /><br /><br /><h1 style={{ color: 'white'}}><center>Log In</center></h1><br />
                <h3 style={{ color: 'white'}}>User Name : </h3>
                <input type="text" placeholder="Enter your username" /><br />
                <h3 style={{ color: 'white'}}>Password : </h3>
                <input type="text" placeholder="Enter your password" /><br /><br /><br />
                <Link to="/Home" className="login-button">LogIn</Link><br /><br /><br />
                <h5 style={{ color: 'white'}}>Don't you have an account?</h5><br />
                <Link to="/SignUpPage" className="signup-button">SignUp</Link><br /><br /><br />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LogInPage;
