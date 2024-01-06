import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Blog',
    element: <Blog />
  },
  {
    path: '/Contact',
    element: <Contact />
  },
])


function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
