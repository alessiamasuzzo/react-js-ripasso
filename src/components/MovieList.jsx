// Sposta i dati dei film in un array di oggetti movies (in un file separato, es. data/movies.js), 
// ognuno con id, title, year, poster, genre e watched (booleano);
// Crea un componente MovieList che riceve movies come prop e genera un <MovieCard> 
// per ogni film con .map(), ricordando la prop key;
// In MovieCard, mostra condizionalmente una scritta “✅ Visto” oppure “👀 Da vedere” in base alla prop watched, usando l’operatore ternario;
// Aggiungi anche un badge con il genere, mostrato solo se il film ha effettivamente un genere impostato (operatore &&).

import MovieCard from './MovieCard'
import { movies }  from '../data/movies' 

export default function MovieList({}){
    return(
        <>
        {movies.map((movie) => (

            <MovieCard 
            key={movie.id}
            title={movie.title}
            year={movie.year}
            poster={movie.poster}
            genre={movie.genre}
            isWatched={movie.isWatched}
            />
        ))}

        </>

)}