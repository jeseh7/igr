import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bulma/css/bulma.min.css';

import App from './App.jsx';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Error from './pages/Error';
import SingleGame from './pages/SingleGame.jsx';
import AuthService from './utils/auth.js'; // Update the path to your AuthService

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/me',
        element: AuthService.loggedIn() ? <Profile /> : () => <Redirect to="/login" />,
      },
      { path: '/game/:gameId', element: <SingleGame /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
