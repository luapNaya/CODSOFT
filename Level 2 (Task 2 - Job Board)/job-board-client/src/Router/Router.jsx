import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import PostJob from "../Pages/PostJob";
import MyJobs from "../Pages/MyJobs";
import EstimateSalary from "../Pages/EstimateSalary";
import UpdateJob from "../Pages/UpdateJob";
// import Login from "../components/Login";
import JobDetails from "../Pages/JobDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/post-job", element: <PostJob /> },
            { path: "/my-jobs", element: <MyJobs /> },
            { path: "/salary", element: <EstimateSalary /> },
            { path: "edit-job/:id", element: <UpdateJob />, loader: ({ params }) => fetch(`http://localhost:3000/all-jobs/${params.id}`) },
            { path: "/job/:id", element: <JobDetails /> },
        ]

    },
    // { path: "/login", element: <Login /> }
]);

export default router;