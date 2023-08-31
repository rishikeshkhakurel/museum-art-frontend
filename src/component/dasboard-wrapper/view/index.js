import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import DashboardWrapperStyled from './dashboard-style'
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { FaPaintbrush } from "react-icons/fa6";
import Logo from '../../../common/assets/logo.png'

const DashboardWrapper = () => {
    const location = useLocation();
    return (
        <>
            <DashboardWrapperStyled>
                <div id="top-navbar">
                    <div id="top-navbar-center">
                        <div id="logo">
                            <img src={Logo} alt='logo' />
                        </div>

                    </div>
                </div>
                <div id="side-menu-and-dashboard-body">
                    <div id="side-menu">
                        <Link to="/artist"><div className={location.pathname === '/artist' ? 'menu menu-selected' : 'menu'}><FaPaintbrush className='icon' /><h3>Artist</h3></div></Link>
                        <Link to="/artwork"><div className={location.pathname.includes('artwork') ? 'menu menu-selected' : 'menu'}><BiSolidPhotoAlbum className='icon' /><h3>Art Work</h3></div></Link>
                    </div>
                    <div id="dashboard-body">
                        <Outlet />
                    </div>
                </div>
            </DashboardWrapperStyled>
        </>
    )
}

export default DashboardWrapper