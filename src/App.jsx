import './App.css'
import { useState } from 'react'
import Container from './components/Container'
import MovieList from './components/MovieList'

// Sposta l’array movies nello stato di App con useState;
// Aggiungi in MovieCard un pulsante “★ Preferito” che, al click, deve aggiornare lo stato dei film segnando quel film come preferito (favorite: true/false);
// La funzione che gestisce il click va definita in App (dove vive lo stato) e passata a MovieCard come prop (funzione come prop), che la richiama passando l’id del film cliccato;
// Non mutare mai l’array direttamente: usa setMovies con la forma funzionale e .map() per creare una nuova copia dell’array con il film aggiornato;
// Applica una classe CSS diversa (es. movie-card--favorite) alle card dei film preferiti, tramite classe dinamica.

function App() {
  const [ movies, setMovies ] = useState(initialMovies)

  function onFavoriteClick(targetId){
    setMovies((movies) => movies.map((movie) => (movie.id === targetId ? {...movie, favorite: !movie.favorite} : movie)))}

  return (
    <>
    <Container>
      <MovieList movies={movies}
      onFavoriteClick={onFavoriteClick}>

      </MovieList>
    </Container> 
    </>
  )
}

export default App
