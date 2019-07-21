import React from 'react';
import PictureCard from '../PictureCard';
import './GameArea.css';

const GameArea = () => {
    return (
        
        <div className="area">
            <div className="ui container">
                <h1>Game</h1>
            <div className="ui five column grid">
                <div className="column">
                    <PictureCard />
                </div>
                <div className="column">
                    <PictureCard />                    
                </div>
                <div className="column">
                    <PictureCard />
                </div>
                <div className="column">
                    <PictureCard />
                </div>
                <div className="column">
                    <PictureCard />
                </div>
            </div>
            </div>
        </div>
    );
};

export default GameArea;