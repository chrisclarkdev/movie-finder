import();

function getMovie(){
fetch(`https://api.themoviedb.org/3/search/movie?api_key=a876e7500012d962d40cf6ba7bd19019&language=en-US&query=${movieSearch}&page=1&include_adult=false`)
.then((response) => {
  return response.json();
}).catch((err) => alert("I have no idea what's going on!!!"))
.then((moviesInfo) => {
 movieCard =  movies.results.map(movieInfo => {
    return movieInfo;
  });
  
})
}
getMovie();