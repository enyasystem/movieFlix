// Movie data (you can expand this with more movies)
const moviesData = [
    {
        title: "The Dark Knight",
        rating: 9.2,
        image: "data:image/svg+xml,<svg width='300' height='450' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='%23032541'/><text x='50%' y='50%' fill='white' text-anchor='middle'>Movie Poster</text></svg>",
        year: 2008,
        genre: "Action"
    },
    {
        title: "Inception",
        rating: 8.8,
        image: "data:image/svg+xml,<svg width='300' height='450' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='%23032541'/><text x='50%' y='50%' fill='white' text-anchor='middle'>Movie Poster</text></svg>",
        year: 2010,
        genre: "Sci-Fi"
    },
    {
        title: "Parasite",
        rating: 8.6,
        image: "data:image/svg+xml,<svg width='300' height='450' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='%23032541'/><text x='50%' y='50%' fill='white' text-anchor='middle'>Movie Poster</text></svg>",
        year: 2019,
        genre: "Thriller"
    },
    {
        title: "Interstellar",
        rating: 8.6,
        image: "data:image/svg+xml,<svg width='300' height='450' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='%23032541'/><text x='50%' y='50%' fill='white' text-anchor='middle'>Movie Poster</text></svg>",
        year: 2014,
        genre: "Sci-Fi"
    },
    {
        title: "The Godfather",
        rating: 9.2,
        image: "data:image/svg+xml,<svg width='300' height='450' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='%23032541'/><text x='50%' y='50%' fill='white' text-anchor='middle'>Movie Poster</text></svg>",
        year: 1972,
        genre: "Crime"
    },
    // Additional movies can be added similarly
];


// TV Shows data
const tvShowsData = [
    {
        title: "Breaking Bad",
        rating: 9.5,
        image: "data:image/svg+xml,<svg width='300' height='450' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='%23032541'/><text x='50%' y='50%' fill='white' text-anchor='middle'>Show Poster</text></svg>",
        year: 2008,
        genre: "Drama"
    },
    {
        title: "Stranger Things",
        rating: 8.7,
        image: "data:image/svg+xml,<svg width='300' height='450' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='%23032541'/><text x='50%' y='50%' fill='white' text-anchor='middle'>Show Poster</text></svg>",
        year: 2016,
        genre: "Sci-Fi"
    },
    {
        title: "Game of Thrones",
        rating: 9.3,
        image: "data:image/svg+xml,<svg width='300' height='450' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='%23032541'/><text x='50%' y='50%' fill='white' text-anchor='middle'>Show Poster</text></svg>",
        year: 2011,
        genre: "Fantasy"
    },
    {
        title: "The Crown",
        rating: 8.6,
        image: "data:image/svg+xml,<svg width='300' height='450' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='%23032541'/><text x='50%' y='50%' fill='white' text-anchor='middle'>Show Poster</text></svg>",
        year: 2016,
        genre: "Drama"
    },
    {
        title: "The Mandalorian",
        rating: 8.8,
        image: "data:image/svg+xml,<svg width='300' height='450' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='%23032541'/><text x='50%' y='50%' fill='white' text-anchor='middle'>Show Poster</text></svg>",
        year: 2019,
        genre: "Sci-Fi"
    },
    // Additional TV shows can be added similarly
];


// New releases data
const newReleasesData = [
    {
        title: "Latest Release",
        rating: 8.5,
        image: "data:image/svg+xml,<svg width='300' height='450' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='%23032541'/><text x='50%' y='50%' fill='white' text-anchor='middle'>New Release</text></svg>",
        releaseDate: "October 2024",
        genre: "Action"
    },
    {
        title: "Oppenheimer",
        rating: 8.9,
        image: "data:image/svg+xml,<svg width='300' height='450' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='%23032541'/><text x='50%' y='50%' fill='white' text-anchor='middle'>New Release</text></svg>",
        releaseDate: "July 2024",
        genre: "Biography"
    },
    {
        title: "Mission Impossible: Dead Reckoning",
        rating: 8.3,
        image: "data:image/svg+xml,<svg width='300' height='450' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='%23032541'/><text x='50%' y='50%' fill='white' text-anchor='middle'>New Release</text></svg>",
        releaseDate: "August 2024",
        genre: "Action"
    },
    {
        title: "Dune: Part Two",
        rating: 8.7,
        image: "data:image/svg+xml,<svg width='300' height='450' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='%23032541'/><text x='50%' y='50%' fill='white' text-anchor='middle'>New Release</text></svg>",
        releaseDate: "November 2024",
        genre: "Sci-Fi"
    },
    // Additional new releases can be added similarly
];


// Function to create movie cards
function createMovieCards(movies = moviesData, container = 'movieGrid') {
    console.log("Creating movie cards");
    const moviesGrid = document.getElementById(container);
    if (!moviesGrid) {
        console.error("movieGrid not found");
        return;
    }

    moviesGrid.innerHTML = ''; // Clear existing content

    movies.forEach(movie => {
        const movieCard = `
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="card movie-card">
                    <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
                    <div class="rating-badge">${movie.rating}</div>
                    <div class="card-body">
                        <h5 class="card-title">${movie.title}</h5>
                        <p class="card-text">${movie.year} | ${movie.genre}</p>
                    </div>
                </div>
            </div>
        `;
        moviesGrid.innerHTML += movieCard;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");
    createMovieCards();
});

// Function to create TV show cards
function createTVShowCards(shows = tvShowsData, container = 'tvShowsGrid') {
    const tvShowsGrid = document.getElementById(container);
    if (!tvShowsGrid) return;
    
    tvShowsGrid.innerHTML = ''; // Clear existing content
    
    shows.forEach(show => {
        const showCard = `
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="card movie-card">
                    <img src="${show.image}" class="card-img-top" alt="${show.title}">
                    <div class="rating-badge">${show.rating}</div>
                    <div class="card-body">
                        <h5 class="card-title">${show.title}</h5>
                        <p class="card-text">${show.year} | ${show.genre}</p>
                    </div>
                </div>
            </div>
        `;
        
        tvShowsGrid.innerHTML += showCard;
    });
}

// Function to create new releases cards
function createNewReleasesCards(releases = newReleasesData) {
    const newReleasesGrid = document.getElementById('newReleasesGrid');
    if (!newReleasesGrid) return;
    
    newReleasesGrid.innerHTML = ''; // Clear existing content
    
    releases.forEach(release => {
        const releaseCard = `
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="card movie-card">
                    <img src="${release.image}" class="card-img-top" alt="${release.title}">
                    <div class="rating-badge">${release.rating}</div>
                    <div class="card-body">
                        <h5 class="card-title">${release.title}</h5>
                        <p class="card-text">${release.releaseDate} | ${release.genre}</p>
                    </div>
                </div>
            </div>
        `;
        
        newReleasesGrid.innerHTML += releaseCard;
    });
}

// Search functionality
function handleSearch(event) {
    event.preventDefault();
    const searchInput = event.target.querySelector('input').value.toLowerCase();
    const currentPage = window.location.pathname;

    if (currentPage.includes('movies.html')) {
        const filteredMovies = moviesData.filter(movie => 
            movie.title.toLowerCase().includes(searchInput) ||
            movie.genre.toLowerCase().includes(searchInput)
        );
        createMovieCards(filteredMovies);
    } 
    else if (currentPage.includes('tvshows.html')) {
        const filteredShows = tvShowsData.filter(show => 
            show.title.toLowerCase().includes(searchInput) ||
            show.genre.toLowerCase().includes(searchInput)
        );
        createTVShowCards(filteredShows);
    }
    else if (currentPage.includes('new-releases.html')) {
        const filteredReleases = newReleasesData.filter(release => 
            release.title.toLowerCase().includes(searchInput) ||
            release.genre.toLowerCase().includes(searchInput)
        );
        createNewReleasesCards(filteredReleases);
    }
    else {
        // For the home page, search across all content
        const filteredMovies = moviesData.filter(movie => 
            movie.title.toLowerCase().includes(searchInput) ||
            movie.genre.toLowerCase().includes(searchInput)
        );
        createMovieCards(filteredMovies);
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Initial content loading
    createMovieCards();
    createTVShowCards();
    createNewReleasesCards();

    // Add search form event listeners
    const searchForms = document.querySelectorAll('form.d-flex');
    searchForms.forEach(form => {
        form.addEventListener('submit', handleSearch);
    });

    // Add real-time search
    const searchInputs = document.querySelectorAll('form.d-flex input');
    searchInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            const searchEvent = new Event('submit');
            this.closest('form').dispatchEvent(searchEvent);
        });
    });
});
