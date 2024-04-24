import React from "react";

function ResinArtContent(props) {
    return (
        <div className="card">
            <img 
                src={props.img} 
                alt={props.title} 
                style={{ width: props.style.width }} 
            />
            <div className="card-content">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <button>{props.buttonText}</button>
            </div>
        </div>
    );
}

export default ResinArtContent;
