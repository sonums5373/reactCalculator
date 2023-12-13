import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
<div>
<Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.postimg.cc/fW8WJXyC/button-video-player-icon-vector.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap

            
          </Navbar.Brand>
        </Container>
      </Navbar>
   
</div>  
)
}

export default Header