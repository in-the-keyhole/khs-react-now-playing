export interface Movie {
    id: string,
    title: string,
    overview: string,
    images: Images
    backdropPathW1280: string,
    voteAverage: number,
    releaseDate: string,
    runtime: number,
    productionCountries: string[],
    genres: string[],
    tagline: string,
    credits: Credits
}

export interface Images {
    posterPath: string,
    backdropPathW1280: string
}

export interface Credits {
    cast: CastMember[]
}

export interface CastMember {
    id: number,
    name: string,
    character: string,
    profilePath: string
}