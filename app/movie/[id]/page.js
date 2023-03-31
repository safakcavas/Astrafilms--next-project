import React from "react";
import {notFound}from "next/navigation"
import MovieContainer from "@/containers/movie";

const API_URl = "https://api.themoviedb.org/3";

const getMovie = async (movieId) => {
  const res = await fetch(
    `${API_URl}/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  return res.json();
};

async function MoviePage({ params }) {
  
  const movieDetail= await getMovie(params.id);

  if(!movieDetail){
    notFound();
  }

  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
