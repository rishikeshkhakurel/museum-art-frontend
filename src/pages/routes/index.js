import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import Artists from '../artists/view';
import ArtWorks from '../art-works/view';
import DashboardWrapper from '../../component/dasboard-wrapper/view/index';

const CustomRoutes = () => {
    return (
        <Routes>
            <Route element={<DashboardWrapper />} >
                <Route path="/artist" element={<Artists />} />
                <Route path="/artwork" element={<ArtWorks />} />
                <Route path="*" element={<Navigate to="/artist" />} />
            </Route>
                <Route path="*" element={<Navigate to="/artist" />} />
        </Routes>
    )
}

export default CustomRoutes