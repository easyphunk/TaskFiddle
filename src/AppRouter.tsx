import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppRoutes from "./constants/appRoutes";

import Home from "./pages/Home";
import Board from "./pages/Board";
import Members from "./pages/Members";
import ProjectSettings from "./pages/ProjectSettings";
import AllProjects from "./pages/AllProjects";
import CreateProject from "./pages/CreateProject";
import Layout from "./components/Layout/Layout";
import ErrorPage from "./pages/Error";

const AppRouter = (): JSX.Element => {
    return (
        <>
            <BrowserRouter>
                {/* TODO: retrieve user login status and assign it to showDrawer value*/}
                <Layout showDrawer={true}>
                    <Routes>
                        <Route
                            path={AppRoutes.home.pattern}
                            element={<Home />}
                        />
                        <Route
                            path={AppRoutes.board.pattern}
                            element={<Board />}
                        />
                        <Route
                            path={AppRoutes.members.pattern}
                            element={<Members />}
                        />
                        <Route
                            path={AppRoutes.projectSettings.pattern}
                            element={<ProjectSettings />}
                        />
                        <Route
                            path={AppRoutes.allProjects.pattern}
                            element={<AllProjects />}
                        />
                        <Route
                            path={AppRoutes.createProject.pattern}
                            element={<CreateProject />}
                        />
                        <Route
                            path='*'
                            element={<ErrorPage />}
                        />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;