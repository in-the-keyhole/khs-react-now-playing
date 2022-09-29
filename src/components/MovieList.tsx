import { useState } from 'react';
import { Movie } from '../model';
import MoviePoster from './MoviePoster';

import './MovieList.css';

interface MovieListProps {
    movies: Movie[];
}
function MovieList({ movies }: MovieListProps) {

    const [searchText, setSearchText] = useState("");
    const [filteredMovies, setFilteredMovies] = useState(movies);
    const search = (e: any) => {
        const filterText = e.target.value;
        setSearchText(filterText);
        if (movies && movies.length) {
            const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(filterText.toLowerCase()));
            setFilteredMovies(filteredMovies);
        }
    };

    return (
        <div className="movie-container">
            <div className="search">
                <label htmlFor="search" hidden>Search</label>
                <input type="search" name="search" placeholder="Filter by title" value={searchText} onChange={search} />
                {/* <button>
                    <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                    </svg>
                </button> */}
            </div>

            <div className="homeBody">
                {filteredMovies.map((movie: Movie) => (
                    <MoviePoster key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default MovieList;
