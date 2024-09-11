import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'


import Header from '../layout/Header';
import Hero from '../components/Hero';

const AppRoute = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='' element={<Header />} >
        <Route index element={<Hero />} />

      </Route>

    )

  );
  return <RouterProvider router={router} />
}
 
export default AppRoute;