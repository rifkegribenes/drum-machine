import React, { Component } from 'react';
import './App.css';

  const sounds = [
    {
      keyCode: 81,
      id: "Q",
      name: "bang"
    },
    {
      keyCode: 87,
      id: "W",
      name: "bawm"
    },
    {
      keyCode: 69,
      id: "E",
      name: "chack"
    },
    {
      keyCode: 65,
      id: "A",
      name: "cheee"
    },
    {
      keyCode: 83,
      id: "S",
      name: "chick"
    },
    {
      keyCode: 68,
      id: "D",
      name: "crash"
    },
    {
      keyCode: 90,
      id: "Z",
      name: "pip"
    },
    {
      keyCode: 88,
      id: "X",
      name: "ratatat"
    },
    {
      keyCode: 67,
      id: "C",
      name: "snap"
    }
  ];

class App extends Component {

  state = {
    name: ""
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = (e) => {
    const keyCodes = sounds.map(sound => sound.keyCode);
    if (keyCodes.includes(e.keyCode)) {
      const soundObj = sounds.filter((sound => sound.keyCode === e.keyCode))[0];
      this.playSound(soundObj);
    } else {
      e.preventDefault();
    }
  }

  handleClick = (e) => {
    const name = e.target.id;
    const soundObj = sounds.filter((sound => sound.name === name))[0];
    this.playSound(soundObj);
  }

  playSound = (soundObj) => {
    document.getElementById(soundObj.id).play();
    this.setState({
      name: soundObj.name
    });
    setTimeout(() => { this.setState({ name: ""})}, 500)

  }

  render() {
    return (
      <div className="app" id="drum-machine">
        <div className="drum-pad-wrap">
          <div className="display" id="display">{this.state.name}</div>
          <button
            className="drum-pad"
            id="bang"
            onClick={(e) => this.handleClick(e)}>Q
            <audio src='https://raw.githubusercontent.com/rifkegribenes/drum-machine/master/src/audio/bang.mp3' className="clip" id="Q" />
          </button>
          <button
            className="drum-pad"
            id="bawm"
            onClick={(e) => this.handleClick(e)}>W
            <audio src='https://raw.githubusercontent.com/rifkegribenes/drum-machine/master/src/audio/bawm.mp3' className="clip" id="W" />
          </button>
          <button
            className="drum-pad"
            id="chack"
            onClick={(e) => this.handleClick(e)}>E
            <audio src='https://raw.githubusercontent.com/rifkegribenes/drum-machine/master/src/audio/chack.mp3' className="clip" id="E" />
          </button>
          <button
            className="drum-pad"
            id="cheee"
            onClick={(e) => this.handleClick(e)}>A
            <audio src='https://raw.githubusercontent.com/rifkegribenes/drum-machine/master/src/audio/cheee.mp3' className="clip" id="A" />
          </button>
          <button
            className="drum-pad"
            id="chick"
            onClick={(e) => this.handleClick(e)}>S
            <audio src='https://raw.githubusercontent.com/rifkegribenes/drum-machine/master/src/audio/chick.mp3' className="clip" id="S" />
          </button>
          <button
            className="drum-pad"
            id="crash"
            onClick={(e) => this.handleClick(e)}>D
            <audio src='https://raw.githubusercontent.com/rifkegribenes/drum-machine/master/src/audio/crash.mp3' className="clip" id="D" />
          </button>
          <button
            className="drum-pad"
            id="pip"
            onClick={(e) => this.handleClick(e)}>Z
            <audio src='https://raw.githubusercontent.com/rifkegribenes/drum-machine/master/src/audio/pip.mp3' className="clip" id="Z" />
          </button>
          <button
            className="drum-pad"
            id="ratatat"
            onClick={(e) => this.handleClick(e)}>X
            <audio src='https://raw.githubusercontent.com/rifkegribenes/drum-machine/master/src/audio/ratatat.mp3' className="clip" id="X" />
          </button>
          <button
            className="drum-pad"
            id="snap"
            onClick={(e) => this.handleClick(e)}>C
            <audio src='https://raw.githubusercontent.com/rifkegribenes/drum-machine/master/src/audio/snap.mp3' className="clip" id="C" />
          </button>
        </div>
      </div>
    );
  }
}

export default App;
