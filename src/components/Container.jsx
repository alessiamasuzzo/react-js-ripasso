// Crea un componente Container che accetta children e li racchiude in un <div className="container">, da usare come layout generale della pagina;
// In App.jsx, dentro Container, inserisci “a mano” 3-4 <MovieCard /> con dati diversi (titolo, anno, poster);
// Applica uno stile di base al progetto (una classe CSS per la card, con className, assegna uno stile al container).

export default function Container({children}){
    return(
    <>
    <div className="container">{children}</div>
    </>
    )

}