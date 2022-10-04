import { Navigate, Route, Routes } from "react-router-dom"
import useLocalStorageState from "use-local-storage-state";
import Login from "./Login"
import MovieDetail from "./MovieDetail"
import NowPlaying from "./NowPlaying"

const Routing = () => {

    const [loggedIn] = useLocalStorageState("loggedIn", { defaultValue: false });

    return (
        <Routes>
            <Route
                path="/"
                element={
                    loggedIn ? (
                        <Navigate replace to="/nowPlaying" />
                    ) : (
                        <Navigate replace to="/login" />
                    )
                }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/nowPlaying" element={<NowPlaying />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
        </Routes>
    )
}

export default Routing;