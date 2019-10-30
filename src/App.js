import React from "react";
import Board from "./Board";
// import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: true,
      P1: "X",
      P2: "O",
      Mark: 'p',
      WhichSector: null,
      Sector1: null,
      Sector2: null,
      Sector3: null,
      Sector4: null,
      Sector5: null,
      Sector6: null,
      Sector7: null,
      Sector8: null,
      Sector9: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleMarkSet = this.handleMarkSet.bind(this);
  }

  handleChange(event) {
    // let thisMark = event.target.id;
    // console.log(thisMark)
    this.setState( { turn: !this.state.turn });
    console.log('turn: ' + this.state.turn)
    let answer = this.state.turn ? this.state.P1 : this.state.P2;
    this.setState({ Mark: answer });
    console.log("Mark: " + this.state.Mark);
    console.log('answer: ' + answer)
    // this.setState({ thisMark: this.state.Mark })
    this.setState({ WhichSector: this.state.Mark });
  }

  handleMarkSet(event) {
    this.setState({ WhichSector: event.target.id });
    console.log('sector: ' + this.state.WhichSector)
    this.handleChange(event);
    document.getElementById(event.target.id).innerHTML = 'Yes';
  }

  render() {
    return (
      <div className="Board">
        <div id="Sector1" className="Sector" onClick={this.handleMarkSet}>
          {this.state.Sector1}
        </div>
        <div id="Sector2" className="Sector" onClick={this.handleChange}>
          {this.state.Sector2}
        </div>
        <div id="Sector3" className="Sector" onClick={this.handleChange}>
          {this.state.Sector3}
        </div>
        <div id="Sector4" className="Sector" onClick={this.handleChange}>
          {this.state.Sector4}
        </div>
        <div id="Sector5" className="Sector" onClick={this.handleChange}>
          {this.state.Sector5}
        </div>
        <div id="Sector6" className="Sector" onClick={this.handleChange}>
          {this.state.Sector6}
        </div>
        <div id="Sector7" className="Sector" onClick={this.handleChange}>
          {this.state.Sector7}
        </div>
        <div id="Sector8" className="Sector" onClick={this.handleChange}>
          {this.state.Sector8}
        </div>
        <div id="Sector9" className="Sector" onClick={this.handleChange}>
          {this.state.Sector9}
        </div>
      </div>
      // <Board />
    );
  }
}

export default App;
