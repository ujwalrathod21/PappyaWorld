
const movies = [
    {
        name: "Inception",
        year: 2010,
        category:"Hollywood",
        image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"
    },
    {
        name: "Interstellar",
        year: 2014,
        category:"Hollywood",
        image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },
    {
        name: "The Dark Knight",
        year: 2008,
        category:"Hollywood",
        image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    },
    {
        name: "Avatar",
        year: 2009,
        category:"Hollywood",
        image: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg"
    },
    {
    name: "3 Idiots",
    year: 2009,
    category: "Bollywood",
    image: "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg"
    },
    {
        name: "Dangal",
        year: 2016,
        category: "Bollywood",
        image: "https://image.tmdb.org/t/p/w500/cJRPOLEexI7qp2DKtFfCh7YaaUG.jpg"
    },
    {
        name:"Game of Thrones",
        year:2008,
        category:"Webseries",
        image:"https://deadline.com/wp-content/uploads/2016/02/got-poster-one.jpg?w=691"
    },
    {
        name:"House of Dragon",
        year:2022,
        category:"Webseries",
        image:"https://m.media-amazon.com/images/M/MV5BOWU2ZDA0M2EtNWEyYy00MWUwLWI4NjAtYzkxMDFjYzZkNGFiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
        name:"Breaking Bad",
        year:2008,
        category:"Webseries",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgZpK_IrW8pvE7Fs9n-phb1-mNy0W_sKZUyNEQjmBYIz43d0o0432eSJM&s=10"
    }
    ];


const bollywoodList = document.getElementById("bollywood-list");
const hollywoodList = document.getElementById("hollywood-list");
const WebseriesList = document.getElementById("Webseries-list");
const searchInput = document.getElementById("searchInput");

function displayMovies(movieArray) {

    bollywoodList.innerHTML = "";
    hollywoodList.innerHTML = "";
    WebseriesList.innerHTML="";

    movieArray.forEach(function(movie) {

        const card = `
            <div class="movie-card" onclick="showDetails('${movie.name}')">
                <img src="${movie.image}" alt="${movie.name}">
                <h3>${movie.name}</h3>
                <p>${movie.year}</p>
            </div>
        `;

        if (movie.category === "Bollywood") {
            bollywoodList.innerHTML += card;
        }

        else if (movie.category === "Hollywood") {
            hollywoodList.innerHTML += card;
        }
        else if(movie.category== "Webseries" ){
            WebseriesList.innerHTML+=card;
        }

    });
}

// Search movies
searchInput.addEventListener("input", function() {

    const searchValue = searchInput.value.toLowerCase();

    const filteredMovies = movies.filter(function(movie) {
        return movie.name.toLowerCase().includes(searchValue);
    });

    displayMovies(filteredMovies);

});

// Display all movies
displayMovies(movies);

function showDetails(movieName) {

    const selectedMovie = movies.find(function(movie) {
        return movie.name === movieName;
    });

    document.getElementById("modalTitle").textContent = selectedMovie.name;
    document.getElementById("modalYear").textContent = "Year: " + selectedMovie.year;
    document.getElementById("modalCategory").textContent = "Category: " + selectedMovie.category;
    document.getElementById("modalDescription").textContent = selectedMovie.description || "No description available.";

    document.getElementById("movieModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("movieModal").style.display = "none";
}