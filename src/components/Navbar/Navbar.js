import React from 'react';
import styles from './Navbar.css';

const Navbar = props => {
    return (
        <div className='navbar'>
            <ul>
                <li>Color-Shift</li>
                <li>{props.info.message}</li>
                <li>Score: {props.info.currentScore} | Top Score: {props.info.highScore}</li>
            </ul>
        </div>
    );
};

export default Navbar;