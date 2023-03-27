import FeaturedMovie from "@/components/featured-movie";
import React from "react";
import Movies from "../../app/mocks/movies.json";
import Genres from "@/app/mocks/genres.json"
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section/movies.section"
function HomeContainer() {
  return (
  <div>
    <FeaturedMovie movie={Movies.results[0]} />
    <Categories categories={Genres.genres.slice(0,5)}/>
    <MoviesSection title='Popular Films' movies={Movies.results.slice(0,5)}/>
  </div>);
}

export default HomeContainer;

