import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <Link className='navbar-brand' to='/articles'>
                    Dog App
                </Link>
            </nav>
        )
    }
}

export default Navbar;