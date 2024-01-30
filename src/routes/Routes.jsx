import { createBrowserRouter } from "react-router-dom";
import SignUpForm from "../page/Register/SignUpForm";
import Banner from "../Banner";

const router = createBrowserRouter([
    {
        path: "/",
        element: <SignUpForm></SignUpForm>
    },
    {
        path: "banner",
        element: <Banner></Banner>
    },
]);
export default router;