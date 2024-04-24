import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import FirstPageImage from "../assets/FirstPage.jpg";
import "./FirstPage.css"; // Import CSS file for additional styling if needed

function FirstPage() {
  return (
    <div
      className="first-page-container"
      style={{
        backgroundImage: `url(${FirstPageImage})`,
      }}
    >
    <div>
        <br/>
        <h1 className="h1">CraftExpress</h1>
     </div>
     <br/><br/><br/><br/>
     <div className="box-login">
        <Link to="/LogInPage" className="login">LogIn</Link>
     </div>
     <br/><br/>
     <div className="box-signup">
        <Link to="/SignUpPage" className="signup">SignUp</Link>
     </div>
    </div>
  );
}

export default FirstPage;
