import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Footer() {
  return (
<div>  
      <CardGroup>
      <Card>
        <Card.Img  variant="top "   /> 
        <i class="fa-solid fa-play" color='red'></i>
        <Card.Body>
          <Card.Title  > Video Uploader</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top"  />
        <Card.Body>
          <Card.Title>Links</Card.Title>
          <Card.Text style={{color:'red'}}>
            Landing Page <br />
            Home <br />
            Watch History{' '}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top"  />
        <Card.Body>
          <Card.Title>Guides</Card.Title>
          <Card.Text>
           React <br />
           React Bootstrap <br />
           Routing
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top"  />
        <Card.Body>
          <Card.Title style={{color:'red'}}>Contact Us</Card.Title>
       <button>Enter Email</button><br />
       <button>Send</button><br />
       <i class="fa-brands fa-instagram"></i>
       <i class="fa-brands fa-facebook"></i>
       <i class="fa-brands fa-twitter"></i>
       <i class="fa-brands fa-github"></i>
        </Card.Body>
        </Card>
    </CardGroup>


</div> 



 );
}

export default Footer;
