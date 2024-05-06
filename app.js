const API_KEY = "7e06685fd85ca11f85cd3e8a7eb7e12f"
const image_path = "https://image.tmdb.org/t/p/w1280"
const trailer_path = "https://www.youtube.com/watch?v="

const input = document.querySelector(".search input");
const button = document.querySelector(".search button");
const mainGridTitle = document.querySelector(".favorites h1");
const mainGrid = document.querySelector(".favorites .movies-grid");

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
	console.log(data);

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
						<span>${e.vote_average}</span>
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
	return responseData.results;
}

function showPopUp(card){
	console.log("Popup is shown" + card);
}