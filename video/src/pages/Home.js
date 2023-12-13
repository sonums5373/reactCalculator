import React from 'react';
import { Row, Col, Button ,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
function Home() {
  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
      <h1 className='container'>Video Uploader</h1><br />
      <h6 className='container'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus neque reprehenderit delectus itaque vero dolore earum obcaecati, nobis quibusdam et tempore eos repudiandae magnam laborum maxime aliquam, placeat unde adipisci. lo
      </h6>
      <br /><br /><br />
      <Row className="container">
        <Col className="d-flex justify-content-between align-items-center">
          <Button variant="danger" className="p-2" type="button">
            Get Started
          </Button>
          <img
            src="https://i.postimg.cc/P5Q4HWFJ/play-store-12-729064.webp"
            alt="Play Store"
            style={{ maxWidth: '20%', height: 'auto' }}
          />
        </Col>
      </Row>
      <div style={{ backgroundColor: 'black', color: 'white' }}>
      <Container>
        <h1>Features</h1>
  
        <Row className="d-flex justify-content-around">
  
          <Col md={4}>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src="https://i.postimg.cc/Zn5zBWFv/pause-button-png-4-removebg-preview.png" alt="Card image" />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
  
          <Col md={4}>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src="https://i.postimg.cc/PJGxszmz/924066.png" alt="Card image" />
              <Card.Body>
                <Card.Title>Catergories Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
  
          <Col md={4}>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src="https://i.postimg.cc/vZztYXHz/images.jpg" alt="Card image" />
              <Card.Body>
                <Card.Title>Watch History</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content. 
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
    </div>
  );
}

export default Home;
