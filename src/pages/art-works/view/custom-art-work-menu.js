import { Menu, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { changingLoadingStatus } from '../../../redux/slices/loading';
import AlertBox from '../../../component/alert-box';
import ConfirmBox from '../../../component/confirm-box';
import { useNavigate } from 'react-router-dom';
import { useDeleteArtWorkMutation } from '../../../redux/services/art-work';

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
    //Delete ArtWork
    const [deleteArtWork, setDeleteArtWork] = useState(false);
    const [deleteArtWorkReq, deleteArtWorkRes] = useDeleteArtWorkMutation();
    const onDeleteArtWork = (id) => {
        setDeleteArtWork(id);
        handleClose();
    }

    const onConfirmDeleteArtWork = () => {
        deleteArtWorkReq(deleteArtWork)
        setDeleteArtWork(false);
    }

    useEffect(() => {
        if (deleteArtWorkRes?.isSuccess || deleteArtWorkRes?.isError) {
            dispatch(changingLoadingStatus(false));
        }
        if (deleteArtWorkRes?.isLoading) {
            dispatch(changingLoadingStatus(true));
        }
    }, [deleteArtWorkRes])

    //edit artWork
    const navigate = useNavigate();
    const [editArtWork, setEditArtWork] = useState(false);
    const onEditArtWork = (id) => {
        setEditArtWork(id);
        handleClose();
    }

    const onConfirmEditArtWork = () => {
        navigate(`/artwork/edit/${editArtWork}`)
        setEditArtWork(false);
    }


    return (
        <>
            {deleteArtWorkRes?.isSuccess && <AlertBox AlertMessage="ArtWork Deleted Successfully" />}
            {deleteArtWorkRes?.isError && <AlertBox isError AlertMessage="Something Went Wrong" />}
            <ConfirmBox
                title="Are you sure, you want to Delete ArtWork"
                open={deleteArtWork}
                dailogHandeller={() => setDeleteArtWork(false)}
                onConform={onConfirmDeleteArtWork}
                error
            />
            <ConfirmBox
                title="Are you sure, you want to Edit ArtWork"
                open={editArtWork}
                dailogHandeller={() => setEditArtWork(false)}
                onConform={onConfirmEditArtWork}
            />
            <BsThreeDotsVertical onClick={handleClick} style={{ padding: 4 }} />
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={() => onEditArtWork(id)}>View</MenuItem>
                <MenuItem onClick={() => onEditArtWork(id)}>Edit</MenuItem>
                <MenuItem onClick={() => onDeleteArtWork(id)}>Delete</MenuItem>
            </Menu>
        </>
    )
}

export default CustomMenu