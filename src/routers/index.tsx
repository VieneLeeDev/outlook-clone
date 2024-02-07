import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Introduction from "../pages/introduction";
import DesignPrinciple from "../pages/designprinciple";
import Changelog from "../pages/changelog";
import Button from "../pages/button";
import Icongallery from "../pages/icongallery";
import Icon from "../pages/icon";
import CommonTerm from "../pages/common-terms";
import CommonProduct from "../pages/commonproduct";
import Typography from "../pages/typography";
import BreadCrumb from "../pages/breadcrumb";

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
        {
            path:"button",
            element: <Button/>
        },  
        {
            path:"icon_gallery",
            element: <Icongallery/>
        },
        {
            path:"icon",
            element: <Icon/>
        },
        {
            path:"common-i18n-terms",
            element: <CommonTerm/>
        },
        {
            path:"common-product",
            element: <CommonProduct/>
        },
        {
            path:"typography",
            element: <Typography/>
        },
        {
            path:"breadcrumb",
            element: <BreadCrumb/>
        },
    ]
}
])