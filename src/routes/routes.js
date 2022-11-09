import { HOME_ROUTE, ABOUT_ME_ROUTE } from "../utils/constants";
import { HomeComponent } from "../components/HomeComponent/HomeComponent";
import { AboutMe } from "../components/AboutMe/AboutMe";


export const routes = [
  {
    path: HOME_ROUTE,
    element: <HomeComponent />,
},
{
  path: ABOUT_ME_ROUTE,
  element: <AboutMe />,
},
];
