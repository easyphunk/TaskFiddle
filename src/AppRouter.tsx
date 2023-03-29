import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRoutes from "./constants/appRoutes";
import Board from "./pages/Board";
import CreateProject from "./pages/CreateProject";
import Home from "./pages/Home";

const AppRouter = (): JSX.Element => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path={AppRoutes.home.pattern}
                        element={<Home />}
                    />
                    <Route
                        path={AppRoutes.createProject.pattern}
                        element={<CreateProject />}
                    />
                    <Route 
                        path={AppRoutes.board.pattern}
                        element={<Board />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;