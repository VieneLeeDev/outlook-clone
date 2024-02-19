import { createHashRouter } from "react-router-dom";
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
import DialogPages from "../pages/dialog";

export const router = createHashRouter([
    {   path:'/',
        element:<MainLayout/>,

        children: [
        {
            index:true,
            element: <Introduction/>
        },
        {
            path: "introduction",
            element: <Introduction/>
        },
        {
            path:"design-principle",
            element: <DesignPrinciple/>,
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
        {
            path:"dialog",
            element: <DialogPages/>
        },
    ]
    }
])

export const routes = [
{
    parent:"Allure DeSign System",
    children: [
        {
            path:"introduction",
            name:"Introduction",
        },
        {
            path:"design-principle",
            name:"Design principle",
        },
        {
            path:"https://xd.adobe.com/view/34543319-c6da-4dd9-be05-fe7b01ae133b-6107/",
            name:"Design standard",
        },
        {
            path:"change-log",
            name:"Change log",
        },
    ]
},
{
    parent:"Basic",
    children: [
        {
            path:"button",
            name:"Button",
        },
        {
            path:"icon_gallery",
            name:"Icon Gallery",
        },
        {
            path:"icon",
            name:"Icon",
        },
        {
            path:"common-i18n-terms",
            name:"Common I18N Terms",
        },
        {
            path:"common-product",
            name:"Common Product",
        },
        {
            path:"typography",
            name:"Typography",
        },
    ]
},
{
    parent:"Navigation",
    children: [
        {
            path:"breadcrumb",
            name:"Breadcrumb",
        },
        {
            path:"#",
            name:"Navigation Menu",
        },
        {
            path:"#",
            name:"Tab",
        },
        {
            path:"#",
            name:"Tree",
        },
        {
            path:"#",
            name:"Wizard",
        },
    ]
},
{
    parent:"Form",
    children: [
        {
            path:"#",
            name:"AutoComplete",
        },
        {
            path:"#",
            name:"Avatar",
        },
        {
            path:"#",
            name:"Checkbox",
        },
        {
            path:"#",
            name:"DatePicker",
        },
        {
            path:"#",
            name:"Expander",
        },
        {
            path:"#",
            name:"FileUploader",
        },
        {
            path:"#",
            name:"Input",
        },
        {
            path:"#",
            name:"Rich textbox",
        },
        {
            path:"#",
            name:"Radio button",
        },
        {
            path:"#",
            name:"Switch",
        },
        {
            path:"#",
            name:"TimePicker",
        },
        {
            path:"#",
            name:"Select",
        },
        {
            path:"#",
            name:"Select",
        },
    ]
},
{
    parent:"Data",
    children: [
        {
            path:"#",
            name:"Calendar",
        },
        {
            path:"#",
            name:"Carousel",
        },
        {
            path:"#",
            name:"Filters",
        },
        {
            path:"#",
            name:"Table",
        },
        {
            path:"#",
            name:"Tooltips",
        },
    ]
},
{
    parent:"Feedback",
    children: [
        {
            path:"#",
            name:"Message",
        },
        {
            path:"#",
            name:"Notification",
        },
    ]
},
{
    parent:"Others",
    children: [
        {
            path:"dialog",
            name:"Dialog",
        },
        {
            path:"#",
            name:"Modal",
        },
        {
            path:"#",
            name:"Loading",
        },
        {
            path:"#",
            name:"Panel",
        },
        {
            path:"#",
            name:"Popover",
        },
        {
            path:"#",
            name:"Progress",
        },
        {
            path:"#",
            name:"Waffle",
        },
        {
            path:"#",
            name:"Activity timeline",
        },
    ]
},
]

export const keywordForRoute = [
    {
        key:"introduction",
        text:"Introduction",
        path: "introduction"

    },
    {
        key:"design principle",
        text:"design principle",
        path: "design-principle"
    },
    {
        key:"change log",
        text:"Change log",
        path: "Changelog"
    },
    {
        key:"button",
        text:"Button",
        path: "Button"
    },
    {
        key:"icon_gallery",
        text:"Icon gallery",
        path: "Icongallery"
    },
    {
        key:"icon",
        text:"Icon",
        path: "Icon"
    },
    {
        key:"common i18n terms",
        text:"CommonTerm",
        path:"CommonTerm"
    },
    {
        key:"typography",
        text:"Typography",
        path:"Typography"
    },
    {
        key:"common product",
        text:"CommonProduct",
        path:"CommonProduct"
    },
    {
        key:"breadcrumb",
        text:"Breadcrumb",
        path:"Breadcrumb"
    },
    {
        key:"dialog",
        text:"Dialog",
        path:"DialogPages"
    },
]