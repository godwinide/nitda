import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className='nav-wrapper'>
        <Link className='logo' to={"/"}>NITDA</Link>
        <p className='page-title hide-mobile'>country top level domain</p>
        <div className='search-wrap'>
        <input type={"search"}></input>
        <button>query domain</button>
        </div>
        <div className='admin-wrap'>
        <i className='fa fa-user'></i>
        <Link to={"/"}>admin</Link>
        </div>
    </nav>
  )
}

export default Header