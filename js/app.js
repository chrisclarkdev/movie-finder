
btn = document.querySelector('#btn');

btn.addEventListener('click', getMovies)


function getMovies(){
  // location.reload(true);
  let movieSearch = document.querySelector('#movie-search').value;
  
  // console.log(movieSearch);
fetch(`https://api.themoviedb.org/3/search/movie?api_key=a876e7500012d962d40cf6ba7bd19019&language=en-US&query=${movieSearch}&page=1&include_adult=false`)
.then((response) => {
  return response.json();
}).catch((err) => alert(err, "I have no idea what's going on!!!"))
.then((movies) => {
 movieCard =  movies.results.map(movie => {
    return movie;
  });
 document.getElementById("movie-search").onfocus = function() {clearDOM()};
  function clearDOM() {
    location.reload();
  }
  getmovieCard()
});
}

// gets the individual movie card with info
function getmovieCard() {
  movieCard.forEach( movie => {
    let moviediv = document.createElement('div');
    moviediv.classList.add('movie-container');
    let title = document.createElement('h1');
    let movieTitle = document.createTextNode(movie.title);
    title.classList.add('movie-title');
    moviediv.appendChild(title);

    //  add image to the card 
    const imgurl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    let img = document.createElement('img');
    img.classList.add('poster');
    if (imgurl == "https://image.tmdb.org/t/p/w500/null"){
      img.src = "/images/coming-soon.jpg";
    } else {
      img.src = imgurl;
    }
    moviediv.appendChild(img);

    // get the film summary 
    // let movieSummary = document.createTextNode(movie.overview);
    // let summary = document.createElement('p');
    // summary.classList.add('movie-summary');
    // summary.appendChild(movieSummary);
    // moviediv.appendChild(summary);
    // document.querySelector('.container').appendChild(moviediv);

    //  release date 

    let releaseDate = document.createTextNode(movie.release_date);
    let year = releaseDate.data.split('-');
    let yearRelease = document.createElement('p');
    yearRelease.classList.add('year');
    yearRelease.append(`Year released ${year[0]}`);
    moviediv.appendChild(yearRelease);
    document.querySelector('.container').appendChild(moviediv);

    // rating 
    let rating  = document.createTextNode(movie.vote_average * 10);
    rating_paragragh = document.createElement('p');
    i_class = document.createElement('i');
    rating_paragragh.classList.add('ratings');
    i_class.classList.add("fas");
    i_class.classList.add("fa-star");
    rating_paragragh.appendChild(i_class);
    i_class.appendChild(rating);
    moviediv.appendChild(rating_paragragh);
    document.querySelector('.container').appendChild(moviediv);
  
    // add a href to movie title 

    let linkTag = document.createElement('a');
    linkTag.classList.add('link');
    linkTag.setAttribute('href', ' movie_page.html');
    movieId = movie.id;
    // console.log(movieId)
    title.appendChild(linkTag);
    linkTag.innerHTML = `${movieTitle.data}`;
    linkTag.addEventListener('click', function() {movieSelected(movie)});
    document.querySelector('.container').appendChild(moviediv);

  
    // disable button 
    btn = document.querySelector('#btn');
    if(moviediv.innerHTML !== ""){
      btn.setAttribute('disabled', true);
    } else {
      btn.setAttribute('disabled', false)
    }
  });

}


function movieSelected(id) {
//  console.log(id.id)
  sessionStorage.setItem("movieId", id.id);
  console.log(id.id)
  window.location = "movie_page.html";
  return id;
  
}

 
  
 


  




