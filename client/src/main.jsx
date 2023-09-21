import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bulma/css/bulma.min.css';

import App from './App.jsx'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Error from './pages/Error'
import SingleGame from './pages/SingleGame.jsx'

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
      // {
      //   path: '/profile/:profileId',
      //   element: <Profile />,
      // },
      {
        path: '/me',
        element: <Profile />
      },
      { index: true, element: <Home /> },
      { path: '/me', element: <Profile /> },
      { path: '/game/:gameId', element: <SingleGame /> }, // Add this route
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

//test