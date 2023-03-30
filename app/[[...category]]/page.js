import React from "react";
import HomeContainer from "@/containers/home";
import Movies from "../mocks/movies.json";
export default function Home({ params }) {
  let selectedCategory;
  if (params.category?.length > 0) {
    selectedCategory = true;
  }
  return (
    <HomeContainer
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? Movies.results.slice(0, 7) : [],
      }} // burada yaoılan işlem eğer selectedCategory true ise movies içindeki değerleri al yoksa boş dizi döndür
    />
  );
  // ? varsa anlamına gelir ?? yoksa demektir
}