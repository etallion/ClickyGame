import React from 'react';
import './PictureCard.css';

const PictureCard = (props) => {
   function doClick(e){
    //    console.log("ID=", props.handlClick);
        props.handleClick(props.id);
    }
        
    return (
        <div onClick={doClick} className="wrapper" id={props.id}>
            <div className={`color-${props.id} card`} ></div>
        </div>
        
    );
};

export default PictureCard;