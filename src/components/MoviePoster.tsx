import moment from 'moment';
import { Link } from 'react-router-dom';
import { Movie } from '../model';

import './MoviePoster.css';

interface MoviePosterProps {
    movie: Movie
}

function MoviePoster({ movie }: MoviePosterProps) {

    const releaseDate = movie?.releaseDate ? moment(new Date(movie?.releaseDate)).format('MMM DD, yyyy') : undefined;

    return (
        <div className="card">
            <Link to={`/movies/${movie.id}`}>
                <img src={movie.images.posterPath} alt={movie.title} />
                <h6>{movie.title}</h6>
                <p>{releaseDate}</p>
            </Link>
        </div>
    );
}

export default MoviePoster;