import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { MOVIE_DETAIL } from '../graphql/queries';
import { CastMember, Movie } from '../model';
import moment from 'moment';
import CastMemberPoster from './CastMemberPoster';
import { BackButton } from './BackButton';
import ScrollToTop from './ScrollToTop';

import './MovieDetail.css';
import { toast } from 'react-toastify';

function MovieDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [movie, setMovie] = useState<Movie | undefined>();
    const [error, setError] = useState<string | undefined>();

    const { loading } = useQuery(MOVIE_DETAIL, {
        variables: { id },
        onCompleted: (data) => {
            setMovie(data.movie);
        },
        onError: (err) => {
            navigate(-1);
            toast.error("An Error occured: " + err.message,{
                autoClose: false
            });
            setError("An error occurred querying a movie.  Please try again.");
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    const releaseDate = movie?.releaseDate ? moment(new Date(movie?.releaseDate)).format('MMM DD, yyyy') : undefined;
    const productionCountries = movie?.productionCountries.map(country => country).join(', ');
    const genres = movie?.genres.map(country => country).join(', ');
    const runtimeDuration = movie?.runtime ? moment.duration(movie?.runtime, 'minutes') : undefined;

    return (
        <>
            <ScrollToTop />
            {/* <div>{movie?.voteAverage && Math.round(movie?.voteAverage * 10)}%</div> */}
            <div className="featureBody">
                <div className="featureRow">
                    <div className="imgBox">
                        <img src={movie?.images.posterPath} alt={movie?.title} />
                    </div>
                    <div className="details">
                        <h2>{movie?.title}</h2>
                        <p>{releaseDate} ({productionCountries}) - {genres} - {runtimeDuration?.hours()}h {runtimeDuration?.minutes()}m</p>
                        <p>{movie?.tagline}</p>
                        <h5>Overview</h5>
                        <p>{movie?.overview}</p>
                    </div>
                </div>
                <hr className="hr" />
                <div className="cast">
                    <h5>Top Billed Cast</h5>
                    {movie?.credits.cast.map((castMember: CastMember) => (
                        <CastMemberPoster key={castMember.id} castMember={castMember} />
                    ))}
                </div>
                <BackButton />
            </div>
        </>
    );
}

export default MovieDetail;
