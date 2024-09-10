import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'


import Header from '../layout/Header';

const AppRoute = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='' element={<Header />} >

      </Route>

    )

  );
  return <RouterProvider router={router} />
}
 
export default AppRoute;