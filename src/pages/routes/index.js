import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import Artists from '../artists/view';
import ArtWorks from '../art-works/view';
import DashboardWrapper from '../../component/dasboard-wrapper/view/index';
import AddArtWork from '../art-works/view/add-art-work';
import AddArtist from '../artists/view/add-artist';

const CustomRoutes = () => {
    return (
        <Routes>
            <Route element={<DashboardWrapper />} >
                <Route path="/artist" element={<Artists />} />
                <Route path="/artist/add" element={<AddArtist />} />
                <Route path="/artist/edit/:artistId" element={<AddArtist />} />
                <Route path="/artwork" element={<ArtWorks />} />
                <Route path="/artwork/add" element={<AddArtWork />} />
                <Route path="*" element={<Navigate to="/artist" />} />
            </Route>
                <Route path="*" element={<Navigate to="/artist" />} />
        </Routes>
    )
}

export default CustomRoutes