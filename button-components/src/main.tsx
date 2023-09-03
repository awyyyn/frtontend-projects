import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createRoutesFromElements, createBrowserRouter, Route } from 'react-router-dom';
import './index.css'
import ButtonsPage from './pages/ButtonsPage.tsx';
import Home from './pages/Home.tsx';
import NotFound from './pages/NotFound.tsx';
import Colors from './pages/Colors.tsx';
import Typography from './pages/Typography.tsx';
import Spaces from './pages/Spaces.tsx';
import Grids from './pages/Grids.tsx';
import Inputs from './pages/Inputs.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route index path='/' element={<Home />}  />
      <Route path='/buttons' element={<ButtonsPage />} />
      <Route path='/colors' element={<Colors />} />
      <Route path='/typography' element={<Typography />} />
      <Route path='/spaces' element={<Spaces />} />
      <Route path='/grids' element={<Grids />} />
      <Route path='/inputs' element={<Inputs />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
