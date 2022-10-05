import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import MovieCard from './components/MovieCard';
import { Container, Row, Col } from 'react-bootstrap';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

const App = () => {
  const [word, setWord] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies([{ ...data, title: word }, ...movies]);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord('');
  };

  const handleDeleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <div>
      <Header title="18 Rabbit Films Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container className="mt-4">
        <Row xs={1} md={2} lg={3}>
          {movies.map((movie, i) => (
            <Col key={i} className="pb-3">
              <MovieCard movies={movie} deleteMovie={handleDeleteMovie} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
