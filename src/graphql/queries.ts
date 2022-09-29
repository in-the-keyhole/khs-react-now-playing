import { gql } from '@apollo/client';

export const NOW_PLAYING = gql`
	query fetchNowPlaying {
		nowPlaying {
			id
			title
			images {
				posterPath
			}
			voteAverage
			releaseDate
		}
	}
`;

export const MOVIE_DETAIL = gql`
	query fetchMovie($id: ID!) {
	  movie(id: $id) {
	    id
	    title
	    overview
		releaseDate
		runtime
    	productionCountries
    	genres
		tagline
		images {
			posterPath
			backdropPathW1280
		}
		voteAverage
		credits {
			cast {
				id
				name
				character
				profilePath
			}
		}
	  }
	}
`;