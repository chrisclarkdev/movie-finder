function getMovie(id) {
  let movieId = sessionStorage.getItem("movieId");
  fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a876e7500012d962d40cf6ba7bd19019&language=en-US`)
  .then((response) => {
    return response.json();
  }).catch((err) => alert("I have no idea what's going on!!!"))
  .then((movie) => {
    
   
  let movieId = sessionStorage.getItem("movieId");
  console.log(movieId)
  //  the Title h1
    let mDiv = document.createElement('div');
    let moviecontainer = document.querySelector('.movie-container');
    let movieTitle = document.createElement('h1');
    movieIdData = document.createTextNode(movie.original_title);
    movieTitle.appendChild(movieIdData)
    mDiv.appendChild(movieTitle);
    moviecontainer.appendChild(mDiv);
  });
  }
