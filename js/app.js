const url = "https://api.themoviedb.org/3/search/movie?api_key=a876e7500012d962d40cf6ba7bd19019&language=en-US&query=batman&page=1&include_adult=false"

// testing github

fetch(url).then((response) => {
  return response.json();
}).catch((err) => alert("I have no idea what's going on!!!"))
.then((movies) => {
  movies.results.map(movie => {
    console.log(movie.title, movie.overview)
  })
})
