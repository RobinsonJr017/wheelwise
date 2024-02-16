import { createBrowserRouter } from 'react-router-dom'
import Layout from "./views/Layout.tsx";
import Home from "./views/Home.tsx";
import AuthView from "./views/AuthView.tsx";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            { path: '/', element: <Home/> },
            { path: '/auth', element: <AuthView/> },
            { path: '/about', element: <h1>About</h1> },
            { path: '/contact', element: <h1>Contact</h1> },
            { path: '*', element: <h1>Not Found</h1> }
        ]
    }
])