import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import GameArea from './components/GameArea';
import Footer from './components/Footer';
import './App.css'

class App extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      beenClicked: [44,90,89],
      highScore: 0,
      currentScore: 0,
      message: 'Click a tile to begin.',
      lastResult: true
    };
  }

  checkHighScore = () => {
    if(this.state.currentScore >= this.state.highScore){
      console.log("new high", this.state.currentScore);
      this.setState({highScore: this.state.currentScore});
    }
  }
 
  updateScore = (result) => {
   // console.log("updateScore with result=" + result +"state.beenClicked=" + this.state.beenClicked);
    if(result){
      //pick correctly
      this.setState({
        currentScore: this.state.currentScore + 1,
        message: 'You clicked correctly.',
        lastResult: 'nothing'
      }, this.checkHighScore);
    } else {
      this.setState({
        beenClicked: [],
        currentScore: 0,
        message: 'You clicked wrong. Try again.',
        lastResult: 'shake'
      });
    }
  };

  handleClick = (id) =>{
   // console.log("Handle Click with id=" + id +"state.beenClicked=" + this.state.beenClicked);

    if(!this.state.beenClicked.includes(id)){
      this.setState({beenClicked: this.state.beenClicked.concat(id)})
      this.updateScore(true);
    } else {
      //clicked wrong, display message reset game
      this.updateScore(false);
    }
  };



  render() {
    return (
      <div className="App">
      <Navbar info={this.state}/>
      <Header />
      <GameArea handleClick={this.handleClick} lastResult={this.state.lastResult}/>
      <Footer />
      </div>
    );
  };
    
}

export default App;
