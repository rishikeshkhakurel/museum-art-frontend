import { Menu, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useDeleteArtistMutation } from '../../../redux/services/artist';
import { useDispatch } from 'react-redux';
import { changingLoadingStatus } from '../../../redux/slices/loading';
import AlertBox from '../../../component/alert-box';
import ConfirmBox from '../../../component/confirm-box';

function CustomMenu({ id }) {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    //Delete Artist
    const [deleteArtist, setDeleteArtist] = useState(false);
    const [deleteArtistReq, deleteArtistRes] = useDeleteArtistMutation();
    const onDeleteArtist = (id) => {
        setDeleteArtist(id);
        handleClose();
    }

    const onConfirmDeleteArtist = () => {
        deleteArtistReq(deleteArtist)
        setDeleteArtist(false);
    }

    useEffect(() => {
        if (deleteArtistRes?.isSuccess || deleteArtistRes?.isError) {
            dispatch(changingLoadingStatus(false));
        }
        if (deleteArtistRes?.isLoading) {
            dispatch(changingLoadingStatus(true));
        }
    }, [deleteArtistRes])
    return (
        <>
            {deleteArtistRes?.isSuccess && <AlertBox AlertMessage="Artist Deleted Successfully" />}
            {deleteArtistRes?.isError && <AlertBox isError AlertMessage="Something Went Wrong" />}
            <ConfirmBox
                title="Are you sure, you want to Delete Artist"
                open={deleteArtist}
                dailogHandeller={() => setDeleteArtist(null)}
                onConform={onConfirmDeleteArtist}
                error
            />
            <BsThreeDotsVertical onClick={handleClick} style={{ padding: 4 }} />
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >

                <MenuItem onClick={handleClose}>Edit</MenuItem>
                <MenuItem onClick={() => onDeleteArtist(id)}>Delete</MenuItem>
            </Menu>
        </>
    )
}

export default CustomMenu