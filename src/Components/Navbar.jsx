import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
    <Link className="nav-link" to="/">Feed</Link>
    <Link className="nav-link" to="/BookMarkArticles">Bookmarks</Link>
  </div>
  )
}

export default Navbar