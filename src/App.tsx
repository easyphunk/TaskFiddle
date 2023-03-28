import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Board from './pages/Board';
import CreateProject from './pages/CreateProject';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/board', element: <Board />},
  { path: '/create-project', element: <CreateProject />},
]);

const App = (): JSX.Element => {
  return <RouterProvider router={router} />
}

export default App;
