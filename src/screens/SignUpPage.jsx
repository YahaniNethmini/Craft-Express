import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import LogoCraftExpress from "../assets/LogoCraftExpress.png";
import './SignUpPage.css';

function SignUpPage(){
    return(
        <div>
            <table className="login-table">
                <tbody>
                    <tr>
                        <td className="log-in">
                            <h1 style={{ color: 'white'}}><center>Sign Up</center></h1>
                            <h3 style={{ color: 'white'}}>User Name : </h3>
                            <input type="text" placeholder="Enter your username" />
                            <h3 style={{ color: 'white'}}>Email : </h3>
                            <input type="text" placeholder="Enter your email" />
                            <h3 style={{ color: 'white'}}>Password : </h3>
                            <input type="text" placeholder="Enter your password" />
                            <h3 style={{ color: 'white'}}>Confirm Password : </h3>
                            <input type="text" placeholder="Re-enter your password" /><br/><br /><br />
                            <Link to="/Home" className="signup-button">SignUp</Link><br /><br/>
                            <h5 style={{ color: 'white'}}>Already have an account.</h5>
                            <Link to="/LogInPage" className="login-button">LogIn</Link><br /><br />
                        </td>
                        <td className="img">
                            <img src={LogoCraftExpress} alt="Craft Express Logo" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SignUpPage;