import React from 'react';
import '../App.css'

const Backdrop = props => (
    // backdrop appears when menu side drawer is open
    <div className='backdrop' onClick={props.click}/>
);

export default Backdrop;