// rrd imports
import { createBrowserRouter, RouterProvider } from "react-router-dom"
// Pages
import Home from "./pages/Home"
import Create from "./pages/Create"
import Recipie from "./pages/Recipie"
import Error from "./pages/Error"
// Layouts
import MainLayout from "./layouts/MainLayout"


function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      errorElement: <Error/>,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'create',
          element: <Create />
        },
        {
          path: 'recipie/:id',
          element: <Recipie />
        },
      ]
    },  
  ])
  return <RouterProvider router={routes}/>
}

export default App