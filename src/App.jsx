import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import getData from './api.jsx'
import MovieList from "./components/MovieList.jsx"


function App() {
  const [movies, setMovies] = useState([])


  const handleSearch = async (text) => {
    const result = await getData(text);
    setMovies(result)
  }

  return (
    <>
    <Header show = {handleSearch} />
    <MovieList moviePlaceHolder = {movies}/>
    </>
  )
}

export default App
