function getMovie(id) {
  let movieId = sessionStorage.getItem("movieId");
  fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a876e7500012d962d40cf6ba7bd19019&language=en-US`)
  .then((response) => {
    return response.json();
  }).catch((err) => alert("I have no idea what's going on!!!"))
  .then((movie) => {
    console.log(movie)
   
  let movieId = sessionStorage.getItem("movieId");
  console.log(movieId)
  let mDiv = document.createElement('div');


    let moviecontainer = document.querySelector('.movie-container');
    let ident_paragragh = document.createElement('p');
    movieIdData = document.createTextNode(movie.original_title);

    ident_paragragh.appendChild(movieIdData)
    console.log(ident_paragragh)
    mDiv.appendChild(ident_paragragh);
    moviecontainer.appendChild(mDiv);
 
  });
  }
