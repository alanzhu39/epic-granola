import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar is-dark' role='navigation' aria-label='main navigation'>
            <div className='container'>
            <div className='navbar-brand'>
                <a className='navbar-item' href="localhost:3000">
                    <img src="https://bulma.io/images/bulma-logo-white.png" width="112" height="28"/>
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    

                </div>


                <div className="navbar-end">
                <a className="navbar-item">
                    Open
                </a>

                <a className="navbar-item">
                    Sweating
                </a>

                <a className="navbar-item">
                    Settled
                </a>

                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-light">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
        </nav>
    )
}

export default Navbar
