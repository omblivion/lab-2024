import dayjs from "dayjs";

function Film(id, title, isFavorite = false, watchDate = null, rating = null, personId = 1) {
    this.id = id;
    this.title = title;
    this.isFavorite = isFavorite;
    this.watchDate = watchDate ? dayjs(watchDate) : null;
    this.rating = rating;
    this.personId = personId;
}

function FilmLibrary() {
    this.films = [];

    this.addNewFilm = function (film) {
        this.films.push(film);
    };

    this.deleteFilm = function (id) {
        this.films = this.films.filter(film => film.id !== id);
    };

    this.resetWatchedFilms = function () {
        this.films.forEach(film => {
            film.watchDate = null;
        });
    };

    this.sortByDate = function () {
        return this.films.sort((a, b) => {
            // Compare the dates
            return a.watchDate.isAfter(b.watchDate) ? 1 : -1;
        });
    };

    this.getRated = function () {
        const ratedFilms = this.films.filter(film => film.rating !== null).sort((a, b) => b.rating - a.rating);
        console.log("***** Films filtered, only the rated ones *****");
        ratedFilms.forEach(film => {
            console.log(`Id: ${film.id}, Title: ${film.title}, Favorite: ${film.isFavorite}, Watch date: ${film.watchDate ? film.watchDate.format('MMMM D, YYYY') : 'N/A'}, Score: ${film.rating}`);
        });
    };
}

// Create a new FilmLibrary instance
const myFilmLibrary = new FilmLibrary();

// Create and add new films
myFilmLibrary.addNewFilm(new Film(1, "Inception", true, "2024-03-10", 5));
myFilmLibrary.addNewFilm(new Film(2, "21 Grams", true, "2024-03-17", 4));
myFilmLibrary.addNewFilm(new Film(3, "The Matrix", true, "2021-06-04", 2));
myFilmLibrary.addNewFilm(new Film(4, "Parasite", false, "2021-06-01", 5));
myFilmLibrary.addNewFilm(new Film(5, "Shrek", false, "2024-03-21", 3));

// Testing functionalities
console.log("Initial Film Library:");
printFilmLibrary(myFilmLibrary.films);


printFilmLibrary(myFilmLibrary.sortByDate());

// Delete a film
myFilmLibrary.deleteFilm(3);
printFilmLibrary(myFilmLibrary.films);

// Reset watch dates
myFilmLibrary.resetWatchedFilms();
printFilmLibrary(myFilmLibrary.films);

// Get and print rated films
myFilmLibrary.getRated();
printFilmLibrary(myFilmLibrary.films);

function printFilmLibrary(films) {
    films.forEach(film => {
        console.log(`ID: ${film.id}, Title: ${film.title}, Favorite: ${film.isFavorite}, Watch Date: ${film.watchDate ? film.watchDate.format('MMMM D, YYYY') : 'N/A'}, Rating: ${film.rating}, Person ID: ${film.personId}`);
    });
    console.log("\n")
}
