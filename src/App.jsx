import React from 'react'
import Home from './Pages/Home';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import EventsPage from './Pages/EventsPage';
import { DataContextProvider } from './Contexts/DataContext';



const router  = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/events",
    element: <EventsPage/>
  },
])


const App = () => {
  return (
    <DataContextProvider>
      <div className=''>
        <RouterProvider router={router}/>
      </div>
    </DataContextProvider>
  )
}

export default App;