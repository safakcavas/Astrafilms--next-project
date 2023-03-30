import FeaturedMovie from "@/components/featured-movie";
import React from "react";
import Movies from "@/app/mocks/movies.json";
import Genres from "@/app/mocks/genres.json";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section/movies.section";
function HomeContainer({ selectedCategory }) {
  const deneme = Genres.genres.find((genre) => genre.id === Number(selectedCategory.id)) || ""    ; // buradaki hatayı şöyle çözebiliriz: const deneme = Genres.genres.find((genre) => genre.id === Number(selectedCategory.id)) || {};
  console.log(deneme);
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0, 5)} />
     
     
      {selectedCategory && selectedCategory.movies.length > 0 && (
  <MoviesSection
    title={
      (Genres.genres.find((genre) => `${genre.id}` === selectedCategory.id) || {}).name || ""
    }
    movies={selectedCategory.movies}
  />
)}
{/* 
      { selectedCategory.movies.length > 0 && (
       <MoviesSection  
        title={
          Genres.genres.find((genre) => `${genre.id}` === selectedCategory.id).name  }  
        movies={selectedCategory.movies}
        />
      )}
       */}
      
      
      
      <MoviesSection
        title="Popular Films"
        movies={Movies.results.slice(0, 5)}
      />
      <MoviesSection
        title="Your Favorites"
        movies={Movies.results.slice(6, 12)}
      />
    </div>
  );
}

export default HomeContainer;
