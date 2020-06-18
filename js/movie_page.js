homelink = document.createElement('a');
homelink.src = 'index.html';
document.body.appendChild(homelink);
console.log(homelink)

function getMovie(id) {
  let movieId = sessionStorage.getItem("movieId");
  fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a876e7500012d962d40cf6ba7bd19019&language=en-US`)
  .then((response) => {
    return response.json();
  }).catch((err) => alert("I have no idea what's going on!!!"))
  .then((movie) => {
    console.log(movie)
   
  sessionStorage.getItem("movieId");
  console.log(movie.homepage)
  //  the Title h1
    let mDiv = document.createElement('div');
    let moviecontainer = document.querySelector('.movie-container');
    let movieTitle = document.createElement('h2');
    movieTitle.classList.add('movie-title');
    movieIdData = document.createTextNode(movie.original_title);
    movieTitle.appendChild(movieIdData)
    mDiv.appendChild(movieTitle);

    // release year 
    let releaseDate = document.createTextNode(movie.release_date);
    let year = releaseDate.data.split('-');
    let yearRelease = document.createElement('p');
    yearRelease.classList.add('year');
    year =yearRelease.append(`Year released ${year[0]}`);
   
    
    const imgurl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    movie_img = document.createElement('img');
    movie_img.classList.add('movie_poster');
    movie_img.src = imgurl;
    mDiv.appendChild(movie_img);

    let movieSummary = document.createTextNode(movie.overview);
    let summary = document.createElement('p');
    summary.classList.add('movie-summary');
    summary.appendChild(movieSummary);
    mDiv.appendChild(summary);
    
    runtime = document.createElement('p')
    // console.log(runtime)
    // console.log(movie.runtime)
    runtimeText = document.createTextNode("runtime: " + movie.runtime + " minutes");
    runtime.appendChild(runtimeText);
    mDiv.appendChild(runtime)
    moviecontainer.appendChild(mDiv);
    getVideo(movie);
    ratings(movie)
  });
  }

  function ratings(movie) {
    let ratings = document.querySelector('.ratings');
    rating = document.createElement('div');
    rating.classList.add('rating');
    svg = document.createElement('SVG');
    svg.setAttribute('viewBox', "0 0 36 36");
    path = document.createElement('path');
    path.setAttribute('d', 'M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831');
    path.setAttribute('fill', '#e7e7e7');
    path.setAttribute('stroke', '#c09e08');
    path.setAttribute('stroke-width', '4');
    const ratingPer = movie.vote_average * 10;
    path.setAttribute('stroke-dasharray', `${ratingPer}, 100`);
    svg.appendChild(path);
    rating.appendChild(svg)
    document.body.appendChild(rating)
    
    console.log(ratingPer);

  }
  // https://www.youtube.com/watch?v=${videoId}
  function getVideo(id) {
   const videoUrl = `https://api.themoviedb.org/3/movie/${id.id}/videos?api_key=a876e7500012d962d40cf6ba7bd19019&language=en-US`;
   fetch(videoUrl)
   .then((response) => {
     return response.json();
   }).catch((err) => alert(err))
   .then((video) => {
     const videoId = video.results[0].key;
     const youtube = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&mute=1";
     const video_container = document.createElement('div');
     const frame = document.createElement('IFRAME');
     frame.setAttribute('width', '400px');
     frame.setAttribute('height', '300px');
     frame.src = youtube;
     video_container.appendChild(frame);
     document.body.appendChild(video_container);
   })
  }
