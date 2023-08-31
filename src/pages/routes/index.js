import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import Artists from '../artists/view';
import ArtWorks from '../art-works/view';

const CustomRoutes = () => {
    return (
        <Routes>
            <Route path="/artist" element={<Artists />} />
            <Route path="/artwork" element={<ArtWorks />} />
            <Route path="*" element={<Navigate to="/artist" />} />
        </Routes>
    )
}

export default CustomRoutes