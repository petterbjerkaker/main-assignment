The project is inspired by the suggestion in task description, regarding creating an app for a library of sorts. 
Instead of a library containing books, I chose to create an app containing a library containing movies. 
To be able to fetch data of movies, I retrieved an API key from a free-to-use API movie database. 
Previously in class, I remember we have worked with data for books, such as author, number of pages and ISBN. 
And for my own project I chose to focus on movies instead, but with the same ideas as from class in mind. 
Another difference is that the data is not written manually and assigned each book, but retrieved through several APIs. 
I have a great interest in movies, and through this the idea for the application originated. 

The user encounters a log-in page as the project's index.html. If the user do not have an account, it is possible to be redirected to a register page. 
The user needs to register an account to be able to enter the "Popcorn Library"-app. To store users I have used Firebase. 
If you have successfully created an account, it will be stored in the Firebase, and you will be able to log in. 
The user is registered and stored with email and password. There is both a log-in, and log-out functionality, and data is stored with localStorage, so the favorited movies do not disappear if the page is refreshed, 
or if the user logs out, and back in again. 
When the user has successfully registered an account, it automatically redirects back to the log-in page.

For each of the movies, there are several APIs retrieved from the movie database. For example, release date, budget, rating, movie tagline, and images. 
Something that was completely new to me was to include the trailer, or a clip, of the movie. In this case, it was included by an <iframe> tag within the popUpContainer, and styled appropriately in the css. 
The trending movies are also fetched from the database, and updates in real time to what movies are trending. This means that one selection of trending movies could be different almost on a day-to-day basis. 

The functionality of this application is mainly through the search method, where a collection of a maximum of 20 movies appear on the page. 
The search method was also something new that I have not worked with earlier, and was an interesting and exciting experience. 
The purpose of this app, is mainly for the user to be able to search, and favorite movies, which adds them to their favorite movies list. 
By clicking the heart icon within the popUpContainer, the movie is added to favorites. 
By clicking the heart-icon again, the color of the heart is not red anymore, and symbolizing that it is removed from favorites. 

I have not included a .env to hide the API_KEY, because I did not think it was necessary when it is an assignment for school, and not an official published public application.

