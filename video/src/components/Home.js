import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
      <h1 className='container mt-5'>Video Uploader</h1><br />
      <h6 className='container'>
        {/* Your Lorem ipsum text */}
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
    </div>
  );
}

export default Home;
