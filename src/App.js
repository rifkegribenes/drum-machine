import React, { Component } from 'react';
import './App.css';

class App extends Component {

  const sounds = [
    {
      keyCode:
      id: "Q"
      name: "bang"
      src: './audio/Bang.mp3'
    },
    {
      keyCode:
      id: "W"
      name: "bawm"
      src: './audio/Bawm.mp3'
    },
    {
      keyCode:
      id: "E"
      name: "chack"
      src: './audio/Chack.mp3'
    },
    {
      keyCode:
      id: "A"
      name: "cheee"
      src: './audio/Cheee.mp3'
    },
    {
      keyCode:
      id: "S"
      name: "chick"
      src: './audio/Chick.mp3'
    },
    {
      keyCode:
      id: "D"
      name: "crash"
      src: './audio/Crash.mp3'
    },
    {
      keyCode:
      id: "Z"
      name: "pip"
      src: './audio/Pip.mp3'
    },
    {
      keyCode:
      id: "X"
      name: "ratatat"
      src: './audio/Ratatat.mp3'
    },
    {
      keyCode:
      id: "C"
      name: "snap"
      src: './audio/Snap.mp3'
    }
  ]

  playSound = (e) => {
    const id = e.target.id;

  }

  render() {
    return (
      <div className="app" id="drum-machine">
        <div className="drum-pad-wrap">
          <div className="display" id="display" />
          <button
            className="drum-pad"
            id="bang"
            onClick={(e) => this.playSound(e)}>Q
            <audio src={bang} className="clip" id="Q" />
          </button>
          <button
            className="drum-pad"
            id="bawm"
            onClick={(e) => this.playSound(e)}>W
            <audio src={bawm} className="clip" id="W" />
          </button>
          <button
            className="drum-pad"
            id="chack"
            onClick={(e) => this.playSound(e)}>E
            <audio src={chack} className="clip" id="E" />
          </button>
          <button
            className="drum-pad"
            id="cheee"
            onClick={(e) => this.playSound(e)}>A
            <audio src={cheee} className="clip" id="A" />
          </button>
          <button
            className="drum-pad"
            id="chick"
            onClick={(e) => this.playSound(e)}>S
            <audio src={chick} className="clip" id="S" />
          </button>
          <button
            className="drum-pad"
            id="crash"
            onClick={(e) => this.playSound(e)}>D
            <audio src={crash} className="clip" id="D" />
          </button>
          <button
            className="drum-pad"
            id="pip"
            onClick={(e) => this.playSound(e)}>Z
            <audio src={pip} className="clip" id="Z" />
          </button>
          <button
            className="drum-pad"
            id="ratatat"
            onClick={(e) => this.playSound(e)}>X
            <audio src={ratatat} className="clip" id="X" />
          </button>
          <button
            className="drum-pad"
            id="snap"
            onClick={(e) => this.playSound(e)}>C
            <audio src={snap} className="clip" id="C" />
          </button>
        </div>
      </div>
    );
  }
}

export default App;
