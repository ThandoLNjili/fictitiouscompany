import React from 'react';

//Function displays landing page informationnpm
function Landing(props){
    return (
        <div className='App-Landing'>
            {/* landing page consists of Overview header and short description of company */}
            <h1>Overview</h1>
            <h6>At {props.company} we believe in providing excellent service to our clients and thereby forging lasting relationships. It is our mantra to treat every client as our only client. Each client and each matter gets treated as such and we strive to deal with each matter as quickly and efficiently and comprehensively as possible.</h6>
        </div>
    );
}

//export component to be used in other .js components
export default Landing;