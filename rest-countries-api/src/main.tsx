 
import ReactDOM from 'react-dom/client' 
import Context from './context.tsx';
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Country from './pages/Country.tsx';
import NotFound from './pages/404.tsx';


const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path='/' index  element={<Home />} />,
    <Route path='/country/:cca2' index  element={<Country />} />,
    <Route path='/*'  element={<NotFound />} />
  ])
);
 

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(  
  <Context>
    <RouterProvider router={router} /> 
  </Context>
)
