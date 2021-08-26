import React from 'react'
import '../styles/navbar.css'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <h2>Your LOgo</h2>
            <Link to="/addpost">
                <Button color="primary">Add a new blog</Button>
                </Link>
      

        </div>
    )
}

export default Navbar
