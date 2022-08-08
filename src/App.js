import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

/* Pages */
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )

}