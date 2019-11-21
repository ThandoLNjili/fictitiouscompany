import React, { Component } from 'react';
//import css file
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import app components
import Header from './Components/Header';
import Landing from './Components/Landing';
import Products from './Components/Products';
import SideDrawer from './Components/SideDrawer/sideDrawer';
import Backdrop from './Components/Backdrop';
import About from './Components/About';

//logged in state, true if user is logged in, false if not
var loggedIn = true;
//company name
const company = 'Doe Pearson Attorneys';

//user information object
var user = {
  //promt user to enter relevant info
  title: 'Miss.', //prompt('Please enter your Title?'),
  name: 'Jane', //prompt('Please enter your name.'),
  surname: 'Doe', //prompt('Please enter your surname'),
  occupation: 'Name Partner',
  email: 'doe.jane@doepearson.com'
};

//company services array with service objects
const services = [{
  id: '1',
  serviceName: 'Corporate',
  description: 'In response to the complex requirements of domestic and international transactions and the considerable areas of law involved, our firm amalgamates the knowledge, experience, and skills of the various disciplines necessary to successfully conclude transactions for our demanding corporate clientele. Doe and Partners is generally a full service corporate law firm, which means that we aim to offer a comprehensive range of services to our clients rather than focusing on just one specific area of law. A strong local presence plus the advantage of efficient global resources enable corporate clients to enjoy swift and successful solutions.'
}, {
  id: '2',
  serviceName: 'Private',
  description: `${company} servicing private clients is knowledgeable in providing high net worth individuals with professional advice on all aspects of family law, inheritance law, taxation, wealth planning and succession related matters. Clients are assisted globally through the comprehensive knowledge in international civil law, international estate planning, wealth management and dispute resolution offered. Regardless of whether the client is in a civil law or case law jurisdiction, due to the unique multidisciplinary approach of ${company} complex problems are able to be solved.`
}, {
  id: '3',
  serviceName: 'Litigation & Dispute Resolution',
  description: `As international business is by definition global, clients need to have access to experienced litigators all over the world. ${company} attorneys are proven professionals in national and international court cases and many of their litigators are recognized as leaders in their specific field. Legal disputes are common place and are usually unpleasant and expensive. The required solution can often be arrived at more effectively via the option of arbitration or mediation. Our attorneys are leaders in both. They assess their clients' prospects with draft solutions in preparation aimed directly at an alternative dispute resolution, but also, if found necessary, will represent their clients in the respective court or supreme courts.
  `
}, {
  id: '4',
  serviceName: 'Administrative & Government Affairs',
  description: `Administrative Law is rapidly growing as a consequence of the increase in governmental functions. Markets and other complex forms of non-governmental administration generate enormous benefits, but also produce inefficiencies and failures, abuses of economic power and position, environmental degradation, safety hazards, economic insecurity, dependency, and other systemic ills. In response to the inadequacies of private and criminal law, legislatures have adopted extensive programs to prevent these ills. Corporate clients as well as some private clients require extensive advice and support for their national and international businesses from well-established GGI law firms who are at the forefront of the latest developments in Administrative Law and understand the necessity for precise assessment and meticulous preparation in all government related affairs, public procurement, government tenders or tenders put out by international organizations and entities`
}];

//component to render App
class App extends Component {
  
  //state of sideDrawer set to false to hide drawer. sideDrawer opens when true
  state = {
    sideDrawerOpen: false
  };

  //method to change state of sideDrawer when triggered
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    });
  };

  //method to display backdrop when state of sideDrawerOpen is true
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    var backdrop;

    //runs when state of sideDrawerOpen is true
    if (this.state.sideDrawerOpen) {
      //variable backdrop is assigned the Backdrop component and the backdropClickHandler method is passed as a prop 
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      //Components are displayed with the Router functionality
      <Router>
        <div className='App'>
          {/* runs code from components with relevant props*/}
          <Header className='App-header' drawerClickHandler={this.drawerToggleClickHandler} title={user.title} name={user.name} surname={user.surname} loggedIn={loggedIn} company={company} />
          <Switch> {/* To stop components display over each other, Switch from react-router-dom is used */}
            {/* Route creates links so that components are displayed only when the specific uri is typed in */}
            <Route path='/' exact component={() => <Landing company={company} />} /> {/* 'exact' is used the Landing page is displayed only when the uri is '/' */}
            <Route path='/services' component={() => <Products services={services} />} />
            <Route path='/about' component={About} />
          </Switch>
          {/* sideDrawer with relevant props, opens when state of sideDrawerOpen is true */}
          <SideDrawer show={this.state.sideDrawerOpen} email={user.email} name={user.name} surname={user.surname} title={user.title} occupation={user.occupation} services={services} click={this.backdropClickHandler}/>
          {/* backdrop displayed when backdropClickHandler is triggered */}
          {backdrop}
        </div>
      </Router>
    );
  }
}

//export component to be used in other .js components
export default App;