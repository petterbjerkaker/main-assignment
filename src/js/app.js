import firebaseConfig from "./firebaseConfig.js";
import {initializeApp} from "firebase/app";
import {getAuth, signOut} from "firebase/auth";


//INITIALIZE FIREBASE
initializeApp(firebaseConfig);

//INITIALIZE AUTH SERVICE
const authService = getAuth();



const API_KEY = "7e06685fd85ca11f85cd3e8a7eb7e12f"
const image_path = "https://image.tmdb.org/t/p/w1280"
const trailer_path = "https://www.youtube.com/watch?v="

const input = document.querySelector(".search input");
const button = document.querySelector(".search button");
const mainGridTitle = document.querySelector(".favorites h1");
const mainGrid = document.querySelector(".favorites .movies-grid");

const trendingMovies = document.querySelector(".trending .movies-grid")

const popUpContainer = document.querySelector(".popup-container");

const signOutButton = document.querySelector(".sign-out-button");


function clickCard (cards){
	cards.forEach(card => {
		card.addEventListener("click", () => showPopUp(card))
	});
}

async function getMovieBySearch (search_term){
	const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search_term}`);
	const responseData = await response.json();
	return responseData.results;
}

button.addEventListener("click", addSearchedMovies)


//SEARCH MOVIES
async function addSearchedMovies(){
	const data = await getMovieBySearch(input.value)

	mainGridTitle.innerText = "Search Results..."
	mainGrid.innerHTML = data.map(e =>{
		return `
				<div class="card" data-id="${e.id}">
					<div class="img">
					<img src="${image_path + e.poster_path}">
				</div>
					<div class="info">
					<h2>${e.title}</h2>
					<div class="single-info">
						<span>Rating: </span>
						<span>${e.vote_average} / 10</span>
					</div>
				<div class="single-info">
					<span>Release date: </span>
					<span>${e.release_date}</span>
				</div>
			</div>
		</div>
		`
	}).join("")

	//------------------------------------------------------------------------------

	const cards = document.querySelectorAll(".card");
	clickCard(cards);
}


// POPUP
async function getMovieById (id){
	const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
	const responseData = await response.json();
	return responseData;
}

async function getMovieTrailer (id){
	const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`);
	const responseData = await response.json();
	return responseData.results[0].key;
}

async function showPopUp(card){
	popUpContainer.classList.add("show-popup");

	const movieId = card.getAttribute("data-id");
	const movie = await getMovieById(movieId);
	const movieTrailer = await getMovieTrailer(movieId);

	popUpContainer.style.background = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1)),
	url(${image_path + movie.poster_path})`

	popUpContainer.innerHTML = `
		<span class="x-icon">&#10006;</span>
			<div class="content">
					<div class="left">
						<div class="poster-img">
							<img src="${image_path + movie.poster_path}" alt="">
						</div>
				<div class="single-info">
					<span>Add to favorites:</span>
					<span class="heart-icon">&#9829;</span>
				</div>
			</div>
			<div class="right">
				<h1>${movie.title}</h1>
				<h3>${movie.tagline}</h3>
				<div class="single-info-container">
					<div class="single-info">
						<span>Language:</span>
						<span>${movie.spoken_languages[0].name}</span>
					</div>
				<div class="single-info">
					<span>Length:</span>
					<span>${movie.runtime}</span>
				</div>
				<div class="single-info">
					<span>Rating:</span>
					<span>${movie.vote_average} / 10</span>
				</div>
				<div class="single-info">
					<span>Budget:</span>
					<span>$ ${movie.budget}</span>
				</div>
				<div class="single-info">
					<span>Release Date:</span>
					<span>${movie.release_date}</span>
				</div>
			</div>
			<div class="genres">
				<h2>Genres</h2>
				<ul>
					${movie.genres.map(e => `<li>${e.name}</li>`).join("")}
				</ul>
			</div>
			<div class="overview">
				<h2>Overview</h2>
				<p>${movie.overview}</p>
			</div>
			<div class="trailer">
				<h2>Trailer</h2>
					<iframe 
						width="560" height="315" src="https://www.youtube.com/embed/${movieTrailer}" frameborder="0" 
						allow="accelerometer; autoplay; clipboard-write; 
						encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
				</iframe>
			</div>
		</div>
	</div>
	`

	const xIcon = document.querySelector(".x-icon");
	xIcon.addEventListener("click", () => popUpContainer.classList.remove("show-popup"));

	const heartIcon = popUpContainer.querySelector(".heart-icon");

	const favoritedMovies = getLocalStorage();
	for(let i = 0; i <= favoritedMovies.length; i++){
		if (favoritedMovies[i] == movieId) heartIcon.classList.add("change-color");
	};

heartIcon.addEventListener("click", ()=>{
	if(heartIcon.classList.contains("change-color")){
		removeLocalStorage(movieId);
		heartIcon.classList.remove("change-color");
	}else{
		addToLocalStorage(movieId);
		heartIcon.classList.add("change-color");
	}
	fetchFavoritedMovies(); 
 });
};

//LOCAL STORAGE
function getLocalStorage (){
	const favoritedMovies = JSON.parse(localStorage.getItem("movie-id"));
	return favoritedMovies === null ? [] : favoritedMovies;
}

function addToLocalStorage (id){
	const favoritedMovies = getLocalStorage();
	localStorage.setItem("movie-id", JSON.stringify([...favoritedMovies, id]));
}

function removeLocalStorage (id){
	const favoritedMovies = getLocalStorage();
	localStorage.setItem("movie-id", JSON.stringify(favoritedMovies.filter(e => e !== id)));
}


//ADDING AND REMOVING FAVORITE MOVIES
fetchFavoritedMovies()
async function fetchFavoritedMovies(){
	mainGrid.innerHTML = ""
	const moviesLocalStorage = await getLocalStorage()
	const movies = []
	for(let i = 0; i <= moviesLocalStorage.length - 1; i++){
		const movieId = moviesLocalStorage[i];
		let movie = await getMovieById(movieId);
		addFavoritesFromLocalStorage(movie);
		movies.push(movie);
	};	
};

function addFavoritesFromLocalStorage(movie_data){
	mainGrid.innerHTML += `
		<div class="card" data-id="${movie_data.id}">
			<div class="img">
			<img src="${image_path + movie_data.poster_path}">
		</div>
		<div class="info">
			<h2>${movie_data.title}</h2>
			<div class="single-info">
				<span>Rating: </span>
				<span>${movie_data.vote_average}</span>
			</div>
			<div class="single-info">
				<span>Release date: </span>
				<span>${movie_data.release_date}</span>
			</div>
		</div>
	</div>
	`

	const cards = document.querySelectorAll(".card");
	clickCard(cards);
}


getTrendingMovies();
async function getTrendingMovies (){
	const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);
	const responseData = await response.json();
	return responseData.results;
}


addTrendingMovies();
async function addTrendingMovies (){
	const data = await getTrendingMovies();

	trendingMovies.innerHTML = data.slice(0, 5).map(e => {
		return `
				<div class="card" data-id="${e.id}">
					<div class="img">
						<img src="${image_path + e.poster_path}">
					</div>
				<div class="info">
					<h2>${e.title}</h2>
					<div class="single-info">
						<span>Rating: </span>
						<span>${e.vote_average} / 10</span>
					</div>
				<div class="single-info">
					<span>Release date: </span>
					<span>${e.release_date}</span>
				</div>
			</div>
		</div>
		`
		
	}).join("");
	const cards = document.querySelectorAll(".card");
	clickCard(cards);
};




//HANDLE SIGN OUT ACTION
function signOutUser(){
	signOut(authService)
	.then(()=>{
		window.location.href = "index.html";
	});
};

signOutButton.addEventListener("click", (e)=>{
	e.preventDefault();
	signOutUser();
});