import React from 'react'
import './login.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function Login() {
  return (
    <form className='form-wrap'>
        <h2 style={{textAlign: "center", color: "#B0CF72"}}>NITDA</h2>
        <h3>Login</h3>
        <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
        </div>
        <div className="form-group my-2">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div>
        </div>
        <button type="submit" className="btn btn-block my-2" style={{backgroundColor: "#B0CF72", color:"#fff"}}>Login</button>
        <p className="forgot-password mt-2">
            Don't have an account? <Link to="/register">Register</Link>
        </p>
    </form>
  )
}

export default Login
