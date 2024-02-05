import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Introduction from "../pages/introduction";
import DesignPrinciple from "../pages/designprinciple";
import Changelog from "../pages/changelog";

export const router = createBrowserRouter([
    {   path:'/',
        element:<MainLayout/>,
        children: [{
            index:true,
            path:"",
            element: <Introduction/>
        },
        {
            path:"design-principle",
            element: <DesignPrinciple/>
        },
        {
            path:"change-log",
            element: <Changelog/>
        },
    ]
    }
])