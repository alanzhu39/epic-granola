import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className='navbar is-primary' role='navigation' aria-label='main navigation'>
            <div className='container'>
                <NavLink className='navbar-item' activeClassName='is-active' to='/' exact>
                    Home
                </NavLink>

                <NavLink className='navbar-item' activeClassName='is-active' to='/about' exact>
                    About
                </NavLink>

                <NavLink className='navbar-item' activeClassName='is-active' to='/profile' exact>
                    Profile
                </NavLink>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <a className="button is-white">Log in</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
