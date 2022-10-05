import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Welcome = () => (
  <Jumbotron>
    <h1>Films Gallery</h1>
    <p>Independent films with an atittude. Search your poisons</p>
    <p>
      <Button variant="primary" href="https://unsplash.com">
        Learn more
      </Button>
    </p>
  </Jumbotron>
);

export default Welcome;
