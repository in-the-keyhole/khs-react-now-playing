import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { NOW_PLAYING } from '../graphql/queries';
import { Movie } from '../model';
import MovieList from './MovieList';
import './NowPlaying.css';

function NowPlaying() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [error, setError] = useState<string | undefined>();
    console.log("this is a test");
    const { loading } = useQuery(NOW_PLAYING, {
        onCompleted: (data) => {
            setMovies(data.nowPlaying);
        },
        onError: (err) => {
            setError("An error occurred querying movies: " + err);
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error}</p>;

    return (
            <MovieList movies={movies} />
    );
}

export default NowPlaying;
