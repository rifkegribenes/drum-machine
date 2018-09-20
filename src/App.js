import React, { Component } from 'react';
import './App.css';

  const sounds = [
    {
      keyCode: 81,
      id: "Q",
      name: "bang",
      src: './audio/Bang.mp3'
    },
    {
      keyCode: 87,
      id: "W",
      name: "bawm",
      src: './audio/Bawm.mp3'
    },
    {
      keyCode: 69,
      id: "E",
      name: "chack",
      src: './audio/Chack.mp3'
    },
    {
      keyCode: 65,
      id: "A",
      name: "cheee",
      src: './audio/Cheee.mp3'
    },
    {
      keyCode: 83,
      id: "S",
      name: "chick",
      src: './audio/Chick.mp3'
    },
    {
      keyCode: 68,
      id: "D",
      name: "crash",
      src: './audio/Crash.mp3'
    },
    {
      keyCode: 90,
      id: "Z",
      name: "pip",
      src: './audio/Pip.mp3'
    },
    {
      keyCode: 88,
      id: "X",
      name: "ratatat",
      src: './audio/Ratatat.mp3'
    },
    {
      keyCode: 67,
      id: "C",
      name: "snap",
      src: './audio/Snap.mp3'
    }
  ];

class App extends Component {

  playSound = (e) => {
    const name = e.target.id;
    const soundObj = sounds.filter((sound => sound.name === name));
    const audioId = soundObj[0].id;
    console.log(document.getElementById(audioId).src);
    document.getElementById(audioId).play();

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
            <audio src='./audio/bang.mp3' className="clip" id="Q" />
          </button>
          <button
            className="drum-pad"
            id="bawm"
            onClick={(e) => this.playSound(e)}>W
            <audio src='./audio/bawm.mp3' className="clip" id="W" />
          </button>
          <button
            className="drum-pad"
            id="chack"
            onClick={(e) => this.playSound(e)}>E
            <audio src='./audio/chack.mp3' className="clip" id="E" />
          </button>
          <button
            className="drum-pad"
            id="cheee"
            onClick={(e) => this.playSound(e)}>A
            <audio src='./audio/cheee.mp3' className="clip" id="A" />
          </button>
          <button
            className="drum-pad"
            id="chick"
            onClick={(e) => this.playSound(e)}>S
            <audio src='./audio/chick.mp3' className="clip" id="S" />
          </button>
          <button
            className="drum-pad"
            id="crash"
            onClick={(e) => this.playSound(e)}>D
            <audio src='./audio/crash.mp3' className="clip" id="D" />
          </button>
          <button
            className="drum-pad"
            id="pip"
            onClick={(e) => this.playSound(e)}>Z
            <audio src='./audio/pip.mp3' className="clip" id="Z" />
          </button>
          <button
            className="drum-pad"
            id="ratatat"
            onClick={(e) => this.playSound(e)}>X
            <audio src='./audio/ratatat.mp3' className="clip" id="X" />
          </button>
          <button
            className="drum-pad"
            id="snap"
            onClick={(e) => this.playSound(e)}>C
            <audio src='./audio/snap.mp3' className="clip" id="C" />
          </button>
        </div>
      </div>
    );
  }
}

export default App;
