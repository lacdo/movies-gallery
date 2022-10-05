import React from 'react';
import { Card, Button } from 'react-bootstrap';

const MovieCard = ({ movies, deleteMovie }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movies.urls.small} />
      <Card.Body>
        <Card.Title>{movies.title.toUpperCase()}</Card.Title>
        <Card.Text>{movies.description || movies.alt_description}</Card.Text>
        <Button variant="primary" onClick={() => deleteMovie(movies.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
