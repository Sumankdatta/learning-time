import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Analytics from './component/Analytics/Analytics';
import Blog from './component/Blog/Blog';

import Home from './component/Home/Home';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/home',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element:
            <Home></Home>},
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/analytics',
          element: <Analytics></Analytics>
        }

      ]
    },

  ]);


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>





    </div>
  );
}

export default App;
