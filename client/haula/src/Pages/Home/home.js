import React, { Component } from 'react';
import { MyNavbar } from '../../Shared/nav/nav2';
import { Footer } from '../../Shared/footer/footer';
import { Image,Button } from 'react-bootstrap';
import { Parallax } from 'react-spring'
import { request } from 'http';
import './home.css';//

// const imgSource1 = require("./components/images/background1.jpg")
// const imgSource2 = require("./components/images/background2.jpg")
const styles = {
    fontFamily: 'Menlo-Regular, Menlo, monospace',
    fontSize: 14,
    color: 'white',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
}


export class Home extends Component {
    render() {
      return (
        <div className="App">
                <div className='parallax'>
                </div>
                <div style={{height: "500px", backgroundColor: "white"}} ></div>
                <div className='parallax'>
                </div>
             {/* <Parallax ref="parallax" pages={3}>

                        <Parallax.Layer 
                            offset={0}
                            speed={0.2} 
                            factor={0}
                            style={{ backgroundColor: 'red'}}
                        />
                        <Parallax.Layer 
                            factor={0}
                            offset={1}
                            speed={0.2}
                            style={{ backgroundColor: 'blue' }}
                        />
                        <Parallax.Layer
                            offset={2}
                            speed={0.2}
                            style={{ backgroundColor: 'green' }}
                            factor={0}
                        />

                        <Parallax.Layer
                            factor={0.7}
                            offset={0}
                            speed={0.5}
                            style={styles}
                            onClick={() => this.refs.parallax.scrollTo(1)}
                        ><Image src={imgSource1} responsive/>
                        </Parallax.Layer>
                        

                        <Parallax.Layer
                            offset={1}
                            speed={-0.5}
                            style={{ backgroundColor: 'white'}}
                            onClick={() => this.refs.parallax.scrollTo(0)}
                            >
                            Another page ... <Button/>
                        </Parallax.Layer>

                        <Parallax.Layer
                            offset={2}
                            speed={0.5}
                            style={styles}
                            onClick={() => this.refs.parallax.scrollTo(0)}>
                            The end.
                        </Parallax.Layer>

                    </Parallax> */}
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p> */}
        </div>
      );
    }
  }

  export default Home;