homelink = document.createElement('a');
homelink.src = 'index.html';
document.body.appendChild(homelink);

function backSearch(){
  // back = sessionStorage.getItem("searchResult");
  window.location.back()
   getMovies();
//  This doesn't work YET!!!!!
}
function getMovie(id) {
  let movieId = sessionStorage.getItem("movieId");
  fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a876e7500012d962d40cf6ba7bd19019&language=en-US`)
  .then((response) => {
    return response.json();
  }).catch((err) => alert("I have no idea what's going on!!!"))
  .then((movie) => {
    console.log(movie)
   
  sessionStorage.getItem("movieId");
  
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
    
    // runtime = document.createElement('p')
    // runtimeText = document.createTextNode("runtime: " + movie.runtime + " minutes");
    // runtime.appendChild(runtimeText);
    // mDiv.appendChild(runtime)
    moviecontainer.appendChild(mDiv);
    getVideo(movie);
   
    iconDiv(movie);
  });
  }
  function iconDiv(movie) {
    // got the info div from the movie page dom element 
    let infoDiv = document.querySelector('.info-div');
    //  created the rating div and added a class of rating 
    rating = document.createElement('div');
    rating.classList.add('rating');
    // created an SVG using createElementNS and path 
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', "0 0 36 36");
    svg.classList.add('svg-rating')
    path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    path.setAttribute( 'd', 'M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831');
    path.style.fill = '#e7e7e7';
    path.style.stroke = '#c09e08';
    path.style.strokeWidth =  '4px';
    const ratingPer = movie.vote_average * 10;
    path.setAttribute('stroke-dasharray', `${ratingPer}, 100`);
    //  created text 
    text = document.createElementNS('http://www.w3.org/2000/svg',  'text')
    text.setAttribute('x', '18');
    text.setAttribute('y', '20.35');
    text.innerHTML = ratingPer + '%' ;
    text.classList.add('percentage');
    text.style.fontFamily = 'Verdana';
        text.style.fontSize = '35';
    thumbsup = document.createElement('p');
    thumbsup.classList.add('user-rating');
    
    thumbsup.innerHTML ="User\nScore:"

    svg.appendChild(path);
    svg.appendChild(text);
    rating.appendChild(thumbsup)
    rating.appendChild(svg);
    
    infoDiv.appendChild(rating);
    // running time div create and class added 
    
    // icontime.classList.add('fa fa-clock');
    timeDiv = document.createElement('div');
    timeDiv.classList.add('time-div');
    runtime = document.createElement('p');
    runtime.classList.add('running-p')
    runtimeText = document.createTextNode(movie.runtime + " mins");
    runtime.appendChild(runtimeText);
    icontime = document.createElement('i');
    icontime.classList.add('far');
    icontime.classList.add('fa-clock');
    let link = document.createElement('i');
    link.classList.add('fas')
    link.classList.add('fa-link')
    let movieURL = document.createElement('a');

    movieURL.setAttribute('href', movie.homepage);
    movieURL.src = movie.homepage
    movieURL.appendChild(link)

    

    timeDiv.appendChild(icontime);
    timeDiv.appendChild(runtime);
    infoDiv.appendChild(timeDiv);
    infoDiv.appendChild(movieURL);


    


    // appends the icons to the info div 
    document.body.appendChild(infoDiv);

    
    
    
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
     if (videoId === undefined){
       document.body.appendChild(video_container).innerHTML = "No Video Avaiable"
     } else {
     const youtube = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&mute=1";
     const video_container = document.createElement('div');
     const frame = document.createElement('IFRAME');
     video_container.classList.add('youtube')
     frame.setAttribute('width', '400px');
     frame.setAttribute('height', '300px');
     frame.src = youtube;
     video_container.appendChild(frame);
     document.body.appendChild(video_container);
     }
     
   })
  }
