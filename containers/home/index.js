import FeaturedMovie from "@/components/featured-movie";
import React from "react";
import Movies from "../../app/mocks/movies.json";
function HomeContainer() {
  return (
  <div>
    <FeaturedMovie movie={Movies.results[0]} />
  </div>);
}

export default HomeContainer;