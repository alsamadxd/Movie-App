import React from "react";
import { useDispatch } from "react-redux";
import Navbar from "../../components/Navbar";
import { useEffect } from "react";
import { getMovies } from "../../api/movies";
import { useSelector } from "react-redux";
import MovieCard from "../../components/MovieCard";
import { Box, Grid } from "@mui/material";
import { getMoviesBySearch } from "../../utils/getMoviesBySearch";

const Home = () => {
  const dispatch = useDispatch();

  const { movies,searchValue } = useSelector((state) => state.movies);
  console.log(movies);
  const filterByMovieName=getMoviesBySearch(movies,searchValue);

  useEffect(() => {
    dispatch(getMovies());
  }, []);
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
          maxWidth: "1800px",
          marginX: "auto",
        }}
      >
       
          {filterByMovieName?.length > 0 &&
            filterByMovieName.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
       
      </Box>
    </>
  );
};

export default Home;
