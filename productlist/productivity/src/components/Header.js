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
              src="https://i.postimg.cc/CMJD10ZM/R.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           <b className='fs-4 mt-4 '>Shoppy</b> 
          </Navbar.Brand>
        </Container>
      </Navbar>     
         </div>
  )
}

export default Header