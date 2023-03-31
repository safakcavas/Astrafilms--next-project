import React from "react";
import HomeContainer from "@/containers/home";

const API_URl = "https://api.themoviedb.org/3";

const getSingleCategories = async (genreId) => {
  const res = await fetch(
    `${API_URl}/discover/movie?api_key=${process.env.API_KEY}&with_genres=${genreId}`
  );
  return res.json();
};

const getCategories = async () => {
  const res = await fetch(
    `${API_URl}/genre/movie/list?api_key=${process.env.API_KEY}&page=1`
  );
  return res.json();
};

const getTopRatedMovies = async () => {
  const res = await fetch(
    `${API_URl}/movie/top_rated?api_key=${process.env.API_KEY}&page=1`
  );
  return res.json();
};

const getPopularMovies = async () => {
  const res = await fetch(
    `${API_URl}/movie/popular?api_key=${process.env.API_KEY}&page=1`
  );
  return res.json();
};

export default async function Home({ params }) {
  let selectedCategory;
  const topRatedPromise = getTopRatedMovies();
  const Popularpromise = getPopularMovies();
  const categorypromise = getCategories();
  const [
    { results: topRatedMovies },
    { results: PopularMovies },
    { genres: category }, 
  ] = await Promise.all([topRatedPromise, Popularpromise, categorypromise]);

  if (params.category?.length > 0) {
    const { results } = await getSingleCategories(params.category[0]); 
  selectedCategory = results;
  }
  return (
    <HomeContainer
      topRatedMovies={topRatedMovies}
      populerMovies={PopularMovies}
      categoriess={category}
      selectedCategory={{
        id: params.category?.[0] || "",
        movies: selectedCategory ? selectedCategory.slice(0, 7) : [],
      }} // burada yaoılan işlem eğer params.category?.[0] varsa onu yoksa boş string döndür demektir
    />
  );
  // ? varsa anlamına gelir ?? yoksa demektir
}
