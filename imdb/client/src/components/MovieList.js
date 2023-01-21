import React from 'react';
import Member from './Member';
import { useSelector } from 'react-redux'
import { Row, Col } from "antd";

// this we will get using api
const dummyData = [{
  name: "The Dark Knight",
  poster: "https://placehold.jp/150x200.png",
  year: "2008",
  plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  producer: {
    name: "Cristopher Nolan",
    gender: "Male",
    dob: "01/01/01",
    bio: "Great producer"
  },
  actors: [{
    name: "Cristian Bale",
    gender: "Male",
    dob: "01/01/01",
    bio: "Great actorGreat actorGreat actor"
  },
  {
    name: "Heath Ledger",
    gender: "Male",
    dob: "01/01/01",
    bio: "Great actorGreat actorGreat actor"
  },{
    name: "Cristian Bale",
    gender: "Male",
    dob: "01/01/01",
    bio: "Great actorGreat actorGreat actor"
  },
  {
    name: "Heath Ledger",
    gender: "Male",
    dob: "01/01/01",
    bio: "Great actorGreat actorGreat actor"
  }]
},{
  name: "The Dark Knight",
  poster: "https://placehold.jp/150x200.png",
  year: "2008",
  plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  producer: {
    name: "Cristopher Nolan",
    gender: "Male",
    dob: "01/01/01",
    bio: "Great producer"
  },
  actors: [{
    name: "Cristian Bale",
    gender: "Male",
    dob: "01/01/01",
    bio: "Great actorGreat actorGreat actor"
  },
  {
    name: "Heath Ledger",
    gender: "Male",
    dob: "01/01/01",
    bio: "Great actorGreat actorGreat actor"
  }]
}];

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
          {data.actors.map((actor, index) => (<Member type="actor" data={actor} />))}
        </Col>
      </Row>
      <p className="plot">{data.plot}</p>
    </div>
    )
}

const MovieList = () => {
  const user = useSelector((state) => state.auth);
  console.log("user", user);

  return (
    <div>
      {dummyData.map((movie) => (
        <SingleMovie key={movie.name} data={movie} />
      ))}
    </div>
  );
};

export default MovieList;