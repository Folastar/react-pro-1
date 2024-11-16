
import './App.css';
import React from 'react';
import { Card} from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const firstName = "folarin";  

  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Name />
          <Price />
          <Description />
          <Image />
        </Card.Body>
      </Card>
      {firstName ? (
        <>
          <h3>Hello, {firstName}!</h3>
          <img src="https://images.pexels.com/photos/2046807/pexels-photo-2046807.jpeg?auto=compress&cs=tinysrgb&w=600    " alt="Welcome" style={{ width: '100px', height: 'auto' }} />
        </>
      ) : (
        <h3>Hello, there!</h3>
      )}
    </div>
  );


  
}

export default App;
