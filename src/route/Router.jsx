import { createBrowserRouter } from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import Profile from "../Profile/Profile";

const router = createBrowserRouter([
    { path: "/", element: <SignUp></SignUp> },
    { path: "/signIn", element: <SignIn></SignIn> },
    { path: "/profile", element: <Profile></Profile> }
])

export default router;