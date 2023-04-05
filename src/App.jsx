import React from 'react'
import Home from './Pages/Home';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import EventsPage from './Pages/EventsPage';



const router  = createBrowserRouter([
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/events",
    element: <EventsPage/>
  },
])


const App = () => {
  return (
      <div className=''>
        <RouterProvider router={router}/>
      </div>
  )
}

export default App;