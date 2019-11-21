import React from 'react';
//import logo from Images folder
import Logo from '../Images/logo.png';
//import menu button
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import { Link } from 'react-router-dom';

//display header
function Header(props) {
    return (
        <header className='App-header'>
            {/* nav area consists of menu button and menu label */}
            <nav className='header-nav'>
                <div>
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
                <div className='menu-label'>Menu</div>
            </nav>
            <div>
                {/* website logo which links to home page when clicked */}
                <Link to='/'>
                    <img className='App-logo' src={Logo} alt='logo is too shy' />
                </Link>
            </div>
            {/* welcome message on header */}
            <h1>{`Welcome to ${props.company}`}</h1>
        </header>
    );
}

//export component to be used in other .js components
export default Header;