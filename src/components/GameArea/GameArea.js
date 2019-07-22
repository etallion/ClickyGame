import React from 'react';
import PictureCard from '../PictureCard';
import './GameArea.css';

class GameArea extends React.Component{
    constructor(props) {
        super(props);
        this.state = {colorOrder: 
            [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
        };
      };
    timesClicked = 0;
    
    arrangments = [
        [10,7,4,11,3,8,6,12,1,9,0,2,13,5,14],
        [0,10,1,11,2,12,3,9,13,4,14,5,6,8,7],
        [2,4,6,8,0,10,12,14,1,3,5,7,9,11,13],
        [13,14,9,3,11,10,5,2,0,12,6,4,7,1,8],
    ];

    mixUp = () => {
        if(this.timesClicked < this.arrangments.length){
            this.setState({colorOrder: this.arrangments[this.timesClicked]});
            this.timesClicked++;
        }
        if(this.timesClicked >= 4){
            this.timesClicked = 0;
        }
       
    }

    handCardClick = id =>{
        this.mixUp();
        this.props.handleClick(id);
    }

    createGrid = () => {
        let grid = []
    
        // Outer loop to create parent
        for (let row = 0; row < 3; row++) {
          let children = []
          //Inner loop to create children
          for (let col = 0; col < 5; col++) {
            children.push(<PictureCard handleClick={(id) => this.handCardClick(id)} id={this.state.colorOrder[(col+(row*5))]}className="column card">{`Column ${col + 1}`}</PictureCard>)
          }
          //Create the parent and add the children
          grid.push(<div className="row">{children}</div>)
        }
        return grid
      }

    render() {

        return (
        <div className="area">
            <div className="ui container">
                <h1>Game</h1>
                <div className="ui four column grid">
                {this.createGrid()}
                </div>
            </div>
        </div>
        );
    }
}

export default GameArea;