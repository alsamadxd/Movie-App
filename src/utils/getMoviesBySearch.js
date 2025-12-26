export const getMoviesBySearch=(movies,value)=>{
    const filterMovies=value.length>0 ? (movies?.length > 0 && movies.filter((movie)=>movie.original_title.toLowerCase().includes(value.toLowerCase()) )):movies;
    return filterMovies;
}