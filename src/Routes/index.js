import { Component } from "react"
import Home from '~/pages/Home/index';
import Following from '~/pages/Following/index';
import Profile from "~/pages/Profile/index";
import Upload from "~/pages/Upload/upload";
import  {HeaderOnly} from "~/components/GlobalStyle/Layout/";
import Search from "~/pages/Search/search";

const publicRoutes = 
[
{path:'/', Component: Home},
{path: '/following', Component: Following},
{path: '/profile', Component: Profile},
{path: '/upload', Component: Upload, layout: HeaderOnly},
{path: '/search', Component: Search, layout: null}

]

const privateRoutes =[

]

export {
    publicRoutes, 
    privateRoutes
}