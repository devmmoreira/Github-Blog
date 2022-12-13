import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import { AppLayout } from "../layouts/appLayout";

import { Home } from "../pages/home";
import { Post } from "../pages/post";

export const AppRoutes: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <AppLayout /> }>
                <Route path="/" element={ <Home /> }/>
                <Route path="/post/:postId" element={ <Post /> }/>
                <Route path="/*" element={ <Navigate to="/" /> }/>
            </Route>
        </Routes>
    </BrowserRouter>
)