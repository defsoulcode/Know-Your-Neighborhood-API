import React, { Component } from 'react';
import './Home.css';
import kyn2 from '../img/kyn2.jpg';


class Home extends Component {
    render() {
        return (
            <div className="container" style={{marginTop:"30px"}}>
                    <div className="card border-0 shadow my-5">
                    <div className="card-body p-5">
                    <div style={{height: "60px"}}></div>
                    <h2 className="text-center">Welcome to Know Your Neighbourhood</h2>
                    <br></br>
                    <img src={kyn2} class="rounded mx-auto d-block" alt="..." style={{width:"1140px"}}></img>
                    <div style={{height: "100px"}}></div>
                    </div>
                    </div>
            </div>
        )
    }
}

export default Home;