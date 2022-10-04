import { useNavigate } from "react-router-dom"

export function BackButton() {
    const navigate = useNavigate();
    return (
        <div className="backBtn">
            <div onClick={() => navigate(-1)}>
                <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
                </svg>
            </div>
        </div >
    );
}