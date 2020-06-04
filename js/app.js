

// testing github
function getMovies(){
  let movieSearch = document.querySelector('#movie-search').value;
  console.log(movieSearch);
fetch(`https://api.themoviedb.org/3/search/movie?api_key=a876e7500012d962d40cf6ba7bd19019&language=en-US&query=${movieSearch}&page=1&include_adult=false`).then((response) => {
  return response.json();
}).catch((err) => alert("I have no idea what's going on!!!"))
.then((movies) => {
 movieCard =  movies.results.map(movie => {
    return movie;
  });

 
  //  console.log(movie)
  // if (movieSearch === " "){
  //   location.reload(false) 
  // } else {
  //   location.reload(true);
  // }
 console.log(" ")
  movieCard.forEach(movie => {
    console.log(movie)
    const imgurl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    let moviediv = document.createElement('div');
    moviediv.classList.add('movie-container');
    // get the film title 
    let title = document.createElement('h1');
    let movieTitle = document.createTextNode(movie.title);
    title.classList.add('movie-title')
    title.appendChild(movieTitle);
    moviediv.appendChild(title);

    //  add image to the card 
    let img = document.createElement('img');
    img.classList.add('poster');
    img.src = imgurl;
    moviediv.appendChild(img);

    // get the film summary 
    let movieSummary = document.createTextNode(movie.overview);
    let summary = document.createElement('p');
    summary.classList.add('movie-summary');
    summary.appendChild(movieSummary);
    moviediv.appendChild(summary);
    document.querySelector('.container').appendChild(moviediv);
  });


})

}
