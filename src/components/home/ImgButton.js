import React from 'react';

const ImgButton = (props) => (
    <div
       onClick={props.click}
        className={props.class ? props.class : "img-button"}
    >
        <img width="200" src={props.img} alt="container"/>
        <p>{props.text}</p>

    </div>
); 

export default ImgButton;