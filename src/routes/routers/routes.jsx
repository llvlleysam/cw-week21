import { createBrowserRouter } from "react-router-dom";
import { ADDconfig } from "../config/ADDconfig";
import CoursesPage from "../../pages/CoursesPage";
import LoginPage from "../../pages/LoginPage";
// import SignUpPage from "../../pages/signUpPage";



export const routes = createBrowserRouter([
    {
        path:ADDconfig.Courses,
        element:<CoursesPage/>
    },
    {
        path:ADDconfig.Login,
        element:<LoginPage/>
    },
    {
        path:ADDconfig.SignUp,
        // element:<SignUpPage/>
    }
])