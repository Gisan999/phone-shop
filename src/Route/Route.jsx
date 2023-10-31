import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import Favorites from "../Components/Favorites/Favorites";
import Login from "../Components/Login/Login";
import Phone from "../Components/Phone/Phone";


const myCreatedRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('/phones.json'),
        },
        {
            path: "/favorites",
            element: <Favorites></Favorites>,
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/phones/:id",
            element: <Phone></Phone>,
            loader: () => fetch('/phones.json')
        }
      ]
    },
  ]);
  

export default myCreatedRouter;