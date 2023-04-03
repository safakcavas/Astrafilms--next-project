import FeaturedMovie from "@/components/featured-movie";
import React from "react";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section/movies.section";
function HomeContainer({
  populerMovies = [],
  topRatedMovies = [],
  selectedCategory,
  categoriess = [], // boş küme parantezi ile başlatıldı ve default değeri olarak boş bir dizi atandı. 
}) {
  
  return (
    <div>
      <FeaturedMovie movie={topRatedMovies?.[1]} />
      <Categories categories={categoriess.slice(0, 5)} /> 
      
      { selectedCategory.movies.length > 0 && (
      <MoviesSection
      title={
        categoriess.find((genre) => genre.id === selectedCategory.id)?.name ?? ""
      }
      movies={selectedCategory.movies}
    />
      )}
       
      

      <MoviesSection
        title="Top Rated Films"
        movies={topRatedMovies.slice(1, 8)}
      />
      <MoviesSection
        title="Your Favorites"
        movies={populerMovies.slice(6, 12)}
      />
    </div>
  );
}

export default HomeContainer;
