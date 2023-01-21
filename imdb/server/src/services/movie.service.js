const { Movie, Actor } = require('./../models/movie.model')

async function getMovies(req) {  

    // const result = await Movie.aggregate([]);

    const result = await [{
  name: "The Dark Knightt",
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
  name: "The Dark Knight 2",
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

    if(result) {
        return { status: true, message: "Movies fetched!", data: result };
    } else {
        return { status: false, message: "Failed to fetch movies, please try later or contact support!" };
    }
}

module.exports = {
    getMovies
}
