import './App.css'
import Container from './components/Container'
import MovieCard from './components/MovieCard'

function App() {
  return (
    <>
    <Container>
    <MovieCard 
    title='Le pagine della nostra vita'
    year='2004'
    poster='https://image.tmdb.org/t/p/original/2ftj0Q2r8WnwFPEdrxeL7x8NNzq.jpg'/>

        <MovieCard 
    title='Harry Potter e il prigioniero di Azkaban'
    year='2004'
    poster='https://www.odeonline.it/app/uploads/2024/05/7a9e7935-a7e3-4856-9466-8852ae70277c.jpg'/>
       
        <MovieCard 
    title='Il principe e il pirata'
    year='2001'
    poster='https://pad.mymovies.it/filmclub/2001/12/005/imm.jpg'/>

    </Container> 
    </>
  )
}

export default App
