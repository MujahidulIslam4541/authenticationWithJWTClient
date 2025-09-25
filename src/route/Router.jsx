import { createBrowserRouter } from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";

const router = createBrowserRouter([
    { path: "/", element: <SignUp></SignUp> },
    { path: "/signIn", element: <SignIn></SignIn> }
])

export default router;