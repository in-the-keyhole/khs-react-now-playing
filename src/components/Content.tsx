
import { ToastContainer } from 'react-toastify';
import Routing from './Routing';

import './Content.css';

const Content = () => {
    return (
        <div className="wrapper">
            <div className="title">
                <p>Movies, TV Shows and the People Who Make Them</p>
            </div>
            <Routing />
            <ToastContainer position="bottom-right" theme="dark" pauseOnFocusLoss={false} />
        </div>
    );
}
export default Content;