import React, {useEffect} from 'react';
import Member from './Member';
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col } from "antd";
import { getMovies } from './../redux/actions/movieActions';

const SingleMovie = ({data}) => {

  return (
    <div className="movie_single">
      <Row>
        <Col md={3} sm={12} xs={24}>
          <img src={data.poster} alt={data.name} />
        </Col>
        <Col md={4} sm={12} xs={24}>
          <h2 className="title">{data.name}</h2>
          <p className="info">Year of Release: {data.year}</p>
          
        </Col>
        <Col md={4} sm={12} xs={24}>
          <h3>Produced by:</h3>
          <Member type="producer" data={data.producer} />
         </Col>
        <Col md={4} sm={12} xs={24}>
          <h3>Actors:</h3>
          {data.actors.map((actor, index) => (<Member type="actor" key={`${actor.name}_${index}`} data={actor} />))}
        </Col>
      </Row>
      <p className="plot">{data.plot}</p>
    </div>
  )
}

const MovieList = () => {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie);

  console.log("movie", movie.success);

  useEffect(() => {
    if(!movie.success) {
      dispatch(getMovies())
    }
  }, []);

  return (
    <div>
      {movie.loading ? (<></>) : (
        movie.movies.map((movie) => (
          <SingleMovie key={movie.name} data={movie} />
        ))
      )}
    </div>
  );
};

export default MovieList;