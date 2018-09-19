import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app" id="drum-machine">
        <div className="drum-pad-wrap">
          <div className="display" id="display" />
          <button className="drum-pad" id="biff">Q
            <audio src="" className="clip" id="Q" />
          </button>
          <button className="drum-pad" id="boom">W
            <audio src="" className="clip" id="W" />
          </button>
          <button className="drum-pad" id="bang">E
            <audio src="" className="clip" id="E" />
          </button>
          <button className="drum-pad" id="crash">A
            <audio src="" className="clip" id="A" />
          </button>
          <button className="drum-pad" id="bada">S
            <audio src="" className="clip" id="S" />
          </button>
          <button className="drum-pad" id="pow">D
            <audio src="" className="clip" id="D" />
          </button>
          <button className="drum-pad" id="ping">Z
            <audio src="" className="clip" id="Z" />
          </button>
          <button className="drum-pad" id="ratatat">X
            <audio src="" className="clip" id="X" />
          </button>
          <button className="drum-pad" id="tap">C
            <audio src="" className="clip" id="C" />
          </button>
        </div>
      </div>
    );
  }
}

export default App;
