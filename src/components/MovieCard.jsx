// Crea un nuovo progetto React chiamato moviehub e imposta le basi del catalogo:
// Crea un componente MovieCard che riceve tramite props title, year e poster (url di un’immagine) e li mostra dentro un <article>;

// In MovieCard, mostra condizionalmente una scritta "✅ Visto" oppure "
// 👀 Da vedere" in base alla prop watched, usando l'operatore ternario;
// Aggiungi anche un badge con il genere, mostrato solo se il film ha effettivamente un genere impostato (operatore &&).
export default function MovieCard({title, year, poster, genre, isWatched}){
    return(
        <>
        <article> 
            <img src={poster} className="posterFilm"></img>
            <p className="titoloFilm">{title} </p>
            <p>{year}</p>
            {/* se il film è stato visto tick altrimtni mostra da vedere */}
            { isWatched ? <p>✅ Visto</p> : <p>👀 Da vedere</p>}
            {/* se il film contiene il genere, mostrarlo altrimenti no */}
            {genre && <p>{genre}</p>}
        </article>
        </>
    )

}