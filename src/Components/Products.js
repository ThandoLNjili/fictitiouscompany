import React from 'react';
// import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

//Function displays services in card format
function Products(props) {
  const prodHeader = <h1>Our Services</h1>;
    const listServices = props.services.map((service) => //iterate through services array
    <div key={service.id}>
        <Row>
          <Card style={{padding: '50px'}}>
            <Card.Body>
              <Card.Title>{service.serviceName}</Card.Title>
              <Card.Text>
                {service.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </div>
    );
    //returns services cards in a container
    return (
      <Container className='container'>
        {prodHeader}
        {listServices}
      </Container>
    );
  }

//export component to be used in other .js components
export default Products;