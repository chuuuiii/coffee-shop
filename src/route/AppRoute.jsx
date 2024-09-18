import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'


import Header from '../layout/Header';
import Hero from '../components/Hero';
// import Menu from '../menu/Menu';

const AppRoute = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Header />} >
        <Route index element={<Hero />} />
        {/* <Route path='/menu' element={<Menu />} /> */}

      </Route>

    )

  );  
  return <RouterProvider router={router} />
}
 
export default AppRoute;