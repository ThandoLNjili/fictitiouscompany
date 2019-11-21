import React from 'react';
import { Link } from "react-router-dom";
import userIcon from '../../Images/user-icon.jpg';
import '../../App.css';

const sideDrawer = props => {
    var drawerClasses = 'side-drawer'; //className for the nav tag
    if (props.show) {
        drawerClasses = 'side-drawer open'; //className of nav tag changes if props.show is true
    }
    return (
            <div>
                {/* nav tag consists of user info and links to various components */}
                <nav className={drawerClasses} >
                    <div className='user-info'>
                        {/* user information consists of user profile picture, user name, email and occupation */}
                        <img src={userIcon}  alt='user icon is a bit shy' />
                        <h3>{props.title} {props.name} {props.surname}</h3>
                        <p>{props.email}</p>
                        <p>{props.occupation}</p>
                    </div>
                    <div className='user-info-line' />
                    <ul>
                        {/* landing, about and service component links in an un-ordered list */}
                        {/* react router used to navigate through components */}
                        <Link to='/'>
                            <li onClick={props.click}>Home</li>
                        </Link>
                        <Link to='/about'>
                            <li onClick={props.click}>About</li>
                        </Link>
                        <Link to='/services'>
                            <li onClick={props.click}>Services</li>
                        </Link>
                    </ul>
                </nav>
            </div>
    );
};

//export component to be used in other .js components
export default sideDrawer;