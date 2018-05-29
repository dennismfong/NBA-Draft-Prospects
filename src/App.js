import React, { Component } from 'react';
import logo from './logo.png';
import luka from './images/luka.gif';
import ayton from './images/ayton.jpg';
import bagley from './images/bagley.jpg';
import jackson from './images/jackson.jpg';
import bamba from './images/bamba.jpg';
import porter from './images/porter.jpg';
import carter from './images/carter.jpg';
import bridges from './images/bridges.jpg';
import young from './images/young.jpg';
import alexander from './images/alexander.jpg';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalBarSeries, Hint} from 'react-vis';

import vis from '../node_modules/react-vis/dist/style.css';


import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:null
    };
    this._rememberValue = this._rememberValue.bind(this);
    this._forgetValue = this._forgetValue.bind(this);
  }

  _rememberValue(value) {
    this.setState({value});
  }

  _forgetValue(value) {
    this.setState({
      value:null
    });
  }
  render() {
    const {value} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">NBA Prospects</h1>
        </header>

        <img src={luka} className="First-Player" />
        <h2 className="Player-title">1. Luka Doncic</h2>
        <XYPlot className = "Plot"
          xType="ordinal"
          stackBy="y"
          width={300}
          height={300}>
          <HorizontalGridLines />
          <VerticalBarSeries data={[{x: 'mins', y: 33.9}]} color="#ff6600" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'pts', y: 21.0}]} color="#cd3b54" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'rebs', y: 11.1}]} color="#59b953" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'asts', y: 1.5}]} color="#ba4fb9" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'steals', y: 0.8}]} color="#0000ff" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'blocks', y: 0.9}]} color="#660066" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <XAxis />
          <YAxis />
          {value ?
            <Hint value={value}>
              <div style={{background: 'black'}}>
                <p>{value.y}</p>
              </div>
            </Hint> :
            null
          }
        </XYPlot>

        <img src={ayton} className="Player" />
        <h2 className="Player-title">2. Deandre Ayton</h2>
        <XYPlot className = "Plot"
          xType="ordinal"
          stackBy="y"
          width={300}
          height={300}>
          <HorizontalGridLines />
          <VerticalBarSeries data={[{x: 'mins', y: 33.5}]} color="#ff6600" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'pts', y: 20.1}]} color="#cd3b54" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'rebs', y: 11.6}]} color="#59b953" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'asts', y: 1.6}]} color="#ba4fb9" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'steals', y: 1.9}]} color="#0000ff" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'blocks', y: 0.6}]} color="#660066" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <YAxis />
          <XAxis />
          {value ?
            <Hint value={value}>
              <div style={{background: 'black'}}>
                <p>{value.y}</p>
              </div>
            </Hint> :
            null
          }
        </XYPlot>

        <img src={bagley} className="Player" />
        <h2 className="Player-title">3. Marvin Bagley III</h2>
        <XYPlot className = "Plot"
          xType="ordinal"
          stackBy="y"
          width={300}
          height={300}>
          <HorizontalGridLines />
          <VerticalBarSeries data={[{x: 'mins', y: 33.5}]} color="#ff6600" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'pts', y: 20.1}]} color="#cd3b54" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'rebs', y: 11.6}]} color="#59b953" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'asts', y: 1.6}]} color="#ba4fb9" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'steals', y: 1.9}]} color="#0000ff" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'blocks', y: 0.6}]} color="#660066" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <YAxis />
          <XAxis />
          {value ?
            <Hint value={value}>
              <div style={{background: 'black'}}>
                <p>{value.y}</p>
              </div>
            </Hint> :
            null
          }
        </XYPlot>

        <img src={jackson} className="Player" />
        <h2 className="Player-title">4. Jaren Jackson Jr.</h2>
        <XYPlot className = "Plot"
          xType="ordinal"
          stackBy="y"
          width={300}
          height={300}>
          <HorizontalGridLines />
          <VerticalBarSeries data={[{x: 'mins', y: 21.8}]} color="#ff6600" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'pts', y: 10.9}]} color="#cd3b54" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'rebs', y: 5.8}]} color="#59b953" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'asts', y: 1.1}]} color="#ba4fb9" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'steals', y: 0.6}]} color="#0000ff" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'blocks', y: 3.0}]} color="#660066" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <YAxis />
          <XAxis />
          {value ?
            <Hint value={value}>
              <div style={{background: 'black'}}>
                <p>{value.y}</p>
              </div>
            </Hint> :
            null
          }
        </XYPlot>

        <img src={bamba} className="Player" />
        <h2 className="Player-title">5. Mo Bamba</h2>
        <XYPlot className = "Plot"
          xType="ordinal"
          stackBy="y"
          width={300}
          height={300}>
          <HorizontalGridLines />
          <VerticalBarSeries data={[{x: 'mins', y: 30.2}]} color="#ff6600" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'pts', y: 12.9}]} color="#cd3b54" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'rebs', y: 10.5}]} color="#59b953" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'asts', y: 0.5}]} color="#ba4fb9" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'steals', y: 0.8}]} color="#0000ff" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'blocks', y: 3.6}]} color="#660066" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <YAxis />
          <XAxis />
          {value ?
            <Hint value={value}>
              <div style={{background: 'black'}}>
                <p>{value.y}</p>
              </div>
            </Hint> :
            null
          }
        </XYPlot>

        <img src={porter} className="Player" />
        <h2 className="Player-title">6. Michael Porter Jr.</h2>
        <XYPlot className = "Plot"
          xType="ordinal"
          stackBy="y"
          width={300}
          height={300}>
          <HorizontalGridLines />
          <VerticalBarSeries data={[{x: 'mins', y: 17.7}]} color="#ff6600" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'pts', y: 10.0}]} color="#cd3b54" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'rebs', y: 6.7}]} color="#59b953" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'asts', y: 0.3}]} color="#ba4fb9" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'steals', y: 1.0}]} color="#0000ff" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'blocks', y: 0.3}]} color="#660066" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <YAxis />
          <XAxis />
          {value ?
            <Hint value={value}>
              <div style={{background: 'black'}}>
                <p>{value.y}</p>
              </div>
            </Hint> :
            null
          }
        </XYPlot>

        <img src={carter} className="Player" />
        <h2 className="Player-title">7. Wendell Carter Jr.</h2>
        <XYPlot className = "Plot"
          xType="ordinal"
          stackBy="y"
          width={300}
          height={300}>
          <HorizontalGridLines />
          <VerticalBarSeries data={[{x: 'mins', y: 26.9}]} color="#ff6600" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'pts', y: 13.5}]} color="#cd3b54" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'rebs', y: 9.1}]} color="#59b953" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'asts', y: 2.0}]} color="#ba4fb9" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'steals', y: 0.8}]} color="#0000ff" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'blocks', y: 2.1}]} color="#660066" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <YAxis />
          <XAxis />
          {value ?
            <Hint value={value}>
              <div style={{background: 'black'}}>
                <p>{value.y}</p>
              </div>
            </Hint> :
            null
          }
        </XYPlot>

        <img src={bridges} className="Player" />
        <h2 className="Player-title">8. Mikal Bridges</h2>
        <XYPlot className = "Plot"
          xType="ordinal"
          stackBy="y"
          width={300}
          height={300}>
          <HorizontalGridLines />
          <VerticalBarSeries data={[{x: 'mins', y: 32.1}]} color="#ff6600" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'pts', y: 17.6}]} color="#cd3b54" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'rebs', y: 5.3}]} color="#59b953" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'asts', y: 1.9}]} color="#ba4fb9" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'steals', y: 1.5}]} color="#0000ff" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'blocks', y: 1.1}]} color="#660066" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <YAxis />
          <XAxis />
          {value ?
            <Hint value={value}>
              <div style={{background: 'black'}}>
                <p>{value.y}</p>
              </div>
            </Hint> :
            null
          }
        </XYPlot>

        <img src={young} className="Player" />
        <h2 className="Player-title">9. Trae Young</h2>
        <XYPlot className = "Plot"
          xType="ordinal"
          stackBy="y"
          width={300}
          height={300}>
          <HorizontalGridLines />
          <VerticalBarSeries data={[{x: 'mins', y: 35.4}]} color="#ff6600" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'pts', y: 27.4}]} color="#cd3b54" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'rebs', y: 3.9}]} color="#59b953" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'asts', y: 8.7}]} color="#ba4fb9" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'steals', y: 1.7}]} color="#0000ff" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'blocks', y: 0.2}]} color="#660066" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <YAxis />
          <XAxis />
          {value ?
            <Hint value={value}>
              <div style={{background: 'black'}}>
                <p>{value.y}</p>
              </div>
            </Hint> :
            null
          }
        </XYPlot>

        <img src={alexander} className="Player" />
        <h2 className="Player-title">10. Shai Gilgeous-Alexander</h2>
        <XYPlot className = "Plot"
          xType="ordinal"
          stackBy="y"
          width={300}
          height={300}>
          <HorizontalGridLines />
          <VerticalBarSeries data={[{x: 'mins', y: 33.7}]} color="#ff6600" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'pts', y: 14.4}]} color="#cd3b54" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'rebs', y: 4.1}]} color="#59b953" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'asts', y: 5.1}]} color="#ba4fb9" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'steals', y: 1.6}]} color="#0000ff" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <VerticalBarSeries data={[{x: 'blocks', y: 0.5}]} color="#660066" onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue}/>
          <YAxis />
          <XAxis />
          {value ?
            <Hint value={value}>
              <div style={{background: 'black'}}>
                <p>{value.y}</p>
              </div>
            </Hint> :
            null
          }
        </XYPlot>
      </div>
    );
  }
}

export default App;
