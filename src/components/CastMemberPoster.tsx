import { CastMember } from '../model';
import MissingCastMember from '../missing-cast.svg';

import './MoviePoster.css';

interface CastMemberProps {
    castMember: CastMember
}

function CastMemberPoster({ castMember }: CastMemberProps) {

    return (
        <div className="castCard">
            <img src={castMember.profilePath ? castMember.profilePath : MissingCastMember} alt={castMember.name} />
            <h6>{castMember.name}</h6>
            <p>{castMember.character}</p>
        </div>
    );
}
export default CastMemberPoster;