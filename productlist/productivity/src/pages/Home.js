import React, { useEffect, useState } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Home() {
// create a state to stor output of api

  const [products, setProducts] = useState([])

  const getProducts = () => {
    fetch('https://fakestoreapi.com/products').then(data => data.json())
      .then(data => setProducts(data))
      // store data in store
  }


  useEffect(() => {
    getProducts()
  }, [])
  console.log(products);
  return (
    <div>
      <Row>
        <Col lg={6} md={6}>
          <img className='w-50 container' src="https://i.postimg.cc/R0HSk7tJ/Supernova-Pozega-2500x1500px-removebg-preview.png" alt="" />

        </Col>
        <Col lg={6} md={6}>
          <h1>shop with me</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, nesciunt aperiam consequatur optio odit voluptatibus harum <br /> velit qui laborum provident est sint ad nostrum rem molestias magnam in nobis cumque. Inventore facilis autem harum ad, enim rem temporibus voluptatibus  molestias quae aut, voluptates id dignissimos dolores ipsam voluptas expedita aliquam obcaecati. Fugiat!</p>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col>
            <Card className="m-3" style={{ width: '18rem' }}>
              <Card.Img varient="top" src="holder"></Card.Img>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button varient="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home