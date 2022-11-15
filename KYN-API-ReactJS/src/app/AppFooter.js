import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class AppFooter extends Component {
    render() {
        return (

        <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p className="col-md-4 mb-0 text-muted">&copy; 2022 Know Your Neighbourhood by NabilaN</p>

            <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><NavLink to="/aboutus">ABOUT US</NavLink></li>&nbsp; &nbsp;
            <li className="nav-item"><NavLink to="/contactus">CONTACT US</NavLink></li>&nbsp; &nbsp;
            <li className="nav-item"><NavLink to="/tc">TERM</NavLink></li>
            </ul>
        </footer>
        </div>

        )
    }
}

export default AppFooter