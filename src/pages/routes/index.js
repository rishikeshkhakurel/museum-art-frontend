import React, { lazy } from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import SuspenseWrapper from '../../component/suspense-wrapper';

const DashboardWrapper = lazy(() => import('../../component/dasboard-wrapper/view/index'));
const Artists = lazy(() => import('../artists/view'));
const AddArtist = lazy(() => import('../artists/view/add-artist'));
const AddArtWork = lazy(() => import('../art-works/view/add-art-work'));
const ArtWork = lazy(() => import('../art-works/view'));

const CustomRoutes = () => {
    return (
        <Routes>
            <Route element={<SuspenseWrapper><DashboardWrapper /></SuspenseWrapper>} >
                <Route path="/artist" element={<SuspenseWrapper><Artists /></SuspenseWrapper>} />
                <Route path="/artist/add" element={<SuspenseWrapper><AddArtist /></SuspenseWrapper>} />
                <Route path="/artist/edit/:artistId" element={<SuspenseWrapper><AddArtist /></SuspenseWrapper>} />
                <Route path="/artwork" element={<SuspenseWrapper><ArtWork /></SuspenseWrapper>} />
                <Route path="/artwork/add" element={<SuspenseWrapper><AddArtWork /></SuspenseWrapper>} />
                <Route path="*" element={<Navigate to="/artist" />} />
            </Route>
            <Route path="*" element={<Navigate to="/artist" />} />
        </Routes>
    )
}

export default CustomRoutes