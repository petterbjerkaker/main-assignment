const API_KEY = "7e06685fd85ca11f85cd3e8a7eb7e12f"
const image_path = "https://image.tmdb.org/t/p/w1280"
const trailer_path = "https://www.youtube.com/watch?v="

const input = document.querySelector(".search input");
const button = document.querySelector(".search button");
const mainGridTitle = document.querySelector(".favorites h1");
const mainGrid = document.querySelector(".favorites .movies-grid");

async function getMovieBySearch (search_term){
	const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search_term}`);
	const responseData = await response.json();
	console.log(responseData.results);
	return responseData.results;
}
getMovieBySearch("game");