import React from 'react'
import './style.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

// address, zipcode, country , state , city


function Signup() {
  return (
    <form className='form-wrap'>
        <h2 style={{textAlign: "center", color: "#B0CF72"}}>NITDA</h2>
        <h3>Signup</h3>
        <div className="form-group">
            <label>First Name</label>
            <input type="text" className="form-control" placeholder="Enter first name" />
        </div>
        <div className="form-group">
            <label>Last Name</label>
            <input type="text" className="form-control" placeholder="Enter last name" />
        </div>
        <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
        </div>
        <div className="form-group">
            <label>Confirm password</label>
            <input type="password" className="form-control" placeholder="Retype password" />
        </div>
        <div className="form-group">
            <label>Date of birth</label>
            <input type="date" className="form-control" placeholder="Date of birth" />
        </div>
        <div className="form-group">
            <label>Address</label>
            <input type="text" className="form-control" placeholder="Address" />
        </div>
        <div className="form-group">
            <label>ZIP Code</label>
            <input type="text" className="form-control" placeholder="ZIP CODE" />
        </div>
        <div className="form-group">
            <label>State</label>
            <input type="text" className="form-control" placeholder="State" />
        </div>
        <div className="form-group">
            <label>City</label>
            <input type="text" className="form-control" placeholder="City" />
        </div>
        <button type="submit" className="btn btn-block my-2" style={{backgroundColor: "#B0CF72", color:"#fff"}}>Signup</button>
        <p className="forgot-password mt-2">
            Already have an account <Link to="/login">Login</Link>
        </p>
    </form>
  )
}

export default Signup
