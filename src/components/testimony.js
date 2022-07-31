import React from "react";
import '../stylesheets/testimony.css'

function Testimony (props) {
    return (
        <div className="container-testimony">
            <img className="image-testimony"
            src={require(`../images/${props.image}.png`)}
            alt="Image Emma" />
            <div className="container-text-testimony">
                <p className="name-testimony">
                    <strong>{props.name}</strong> en {props.country}
                </p>
                <p className="position-testimony">
                    {props.position} en <strong>{props.company}</strong>
                </p>
                <p className="text-testimony">"{props.testimony}"</p>
            </div>
        </div>
    );
}

export default Testimony;