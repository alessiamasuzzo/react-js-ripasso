// Crea un nuovo progetto React chiamato moviehub e imposta le basi del catalogo:
// Crea un componente MovieCard che riceve tramite props title, year e poster (url di un’immagine) e li mostra dentro un <article>;

export default function MovieCard({title, year, poster}){
    return(
        <>
        <article> 
            <img src={poster} className="posterFilm"></img>
            <p className="titoloFilm">{title} </p>
            <p>{year}</p>
        </article>
        </>
    )

}