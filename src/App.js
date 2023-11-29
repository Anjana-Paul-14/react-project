import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
// key: 95b5e460

const API_URL = 'https://www.omdbapi.com?apikey=95b5e460';
const movie1 = {
        "Title": "Spiderman in Cannes",
        "Year": "2016",
        "imdbID": "tt5978586",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg"
    }

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    
    
    }

    useEffect(()=> {
        searchMovies('Spiderman');

    },[]);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                placeholder="SEarch"
                value=" Superman "
                onChange={ () => {} }
                />
                <img
                src={SearchIcon}
                alt="search"
                onClick={ () => {}}
                />
            </div>

            <div className="container">
                <div className="movie">
                    
                    <div>
                        <p> {movie1.Year} </p>
                    </div>

                    <div>
                        <img src={movie1.Poster} alt={movie1.Title}/>
                    </div>
                    <div>
                        <span>{movie1.Type}</span>
                        <h3> {movie1.Title}</h3>
                    </div>
                
                </div>
            </div>
                

        </div>
    );
}

export default App;