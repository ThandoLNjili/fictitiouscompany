import React from 'react';
import '../../App.css';

const drawerToggleButton = props => (
    //menu button, divs used as lines on the button
    <button className='toggle-button' onClick={props.click}>
        <div className='toggle-button-line'/>
        <div className='toggle-button-line'/>
        <div className='toggle-button-line'/>
    </button>
);

//export component to be used in other .js components
export default drawerToggleButton;