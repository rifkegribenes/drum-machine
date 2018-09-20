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
          {sounds.map(sound => (
            <button
              className="drum-pad"
              key={sound.id}
              id={sound.name}
              onClick={(e) => this.handleClick(e)}>{sound.id}
              <audio src={`https://raw.githubusercontent.com/rifkegribenes/drum-machine/master/src/audio/${sound.name}.mp3`} className="clip" id={sound.id} />
            </button>
            ))}
        </div>
      </div>
    );
  }
}

export default App;
