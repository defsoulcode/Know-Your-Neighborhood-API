import React, { Component } from 'react';

class ContactUs extends Component {
    render() {
        return (
            <div className="container">
                <div style={{height: "14px"}}></div>
                <div className="card border-0 shadow my-5" >
                    <div className="card-body p-5" >
                    <h2 className="text-center">Contact Us</h2>
                    <br></br>
                    <div className="content">
                        <h5>Address</h5>
                        <p>7, Phoenix, KYN</p>
                        <br></br>
                        <h5>Email</h5>
                        <p>kyn@gmail.com</p>
                        <br></br>
                        <h5>Contact</h5>
                        <p>021-91199292</p>
                    </div>
                    </div>
                </div>
                <div style={{height: "18px"}}></div>
            </div>
        )
    }
}
export default ContactUs;