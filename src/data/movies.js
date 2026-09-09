// Sposta i dati dei film in un array di oggetti movies (in un file separato, es. data/movies.js), 
// ognuno con id, title, year, poster, genre e watched (booleano);
// Crea un componente MovieList che riceve movies come prop e genera 
// un <MovieCard> per ogni film con .map(), ricordando la prop key;
// In MovieCard, mostra condizionalmente una scritta "✅ Visto" oppure "
// 👀 Da vedere" in base alla prop watched, usando l'operatore ternario;
// Aggiungi anche un badge con il genere, mostrato solo se il film ha effettivamente un genere impostato (operatore &&).


export const movies = [{
    id: 1,
    title: "Le pagine della nostra vita",
    year: 2004,
    poster: "https://image.tmdb.org/t/p/original/2ftj0Q2r8WnwFPEdrxeL7x8NNzq.jpg",
    genre: "",
    isWatched: true,
    favorite: false,
},
{
    id: 2,
    title: "Harry Potter e il prigioniero di Azkaban",
    year: 2004,
    poster: "https://www.odeonline.it/app/uploads/2024/05/7a9e7935-a7e3-4856-9466-8852ae70277c.jpg",
    genre: "Fantasia",
    isWatched: true,
    favorite: false,
},
{
    id: 3,
    title: "Il principe e il pirata",
    year: 2001,
    poster: "https://pad.mymovies.it/filmclub/2001/12/005/imm.jpg",
    genre: "Fantasia",
    isWatched: false,
    favorite: false,
},
]
