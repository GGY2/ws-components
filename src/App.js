import React from 'react';
import { Container, Card } from 'react-bootstrap';
import SuggestedVideo from './components/SuggestedVideo';
import Comments from './components/Comments';

function App() {
  return (
    <div className="App">
      <Container className="video-container">
        
        <div className="video-container-main">
          <Card style={{padding:'10px'}}>
            <Card.Body>
              <Card.Title style={{margin:'0 0 20px 0'}}>
              <h3 style={{fontWeight:700, color:'333', fontSize:'22px'}}>Watch your favorite videos from anywhere</h3>
              </Card.Title>  
              <iframe width="100%" height="350px" src="https://www.youtube.com/embed/g7q60i_Lh_E" frameborder="0" allow="accelerometer autoplay 
              clipboard-write encrypted-media gyroscope picture-in-picture" allowfullscreen>
              </iframe>
              <h5 style={{fontWeight: 600, margin: '20px 0px 20px 0px'}}>Comments</h5>
              <Comments />
            </Card.Body>
          </Card>
        </div>

        <div className="video-container-suggested">
          <h3 style={{color:'#a3ff08', textTransform:'uppercase'}}>Suggested for you</h3>
          <SuggestedVideo />
        </div>

      </Container>
    </div>
  );
}

export default App;
