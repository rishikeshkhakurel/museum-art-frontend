import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '../../../component/button';
import { useDispatch } from 'react-redux';
import { changingLoadingStatus } from '../../../redux/slices/loading';
import { useGetArtWorkQuery, useSearchArtWorkMutation } from '../../../redux/services/art-work';
import { Tooltip, Typography } from '@mui/material';
import Loading from '../../../component/Loading';
import CustomMenu from './custom-art-work-menu';

const columns = [
    { id: 'Title', label: 'Title', minWidth: 170, maxWidth: 200, },
    {
        id: 'Artist[0]',
        label: 'Artist',
        minWidth: 170,
        maxWidth: 200,
        align: 'left',
    },
    {
        id: 'URL',
        label: 'URl',
        minWidth: 170,
        align: 'left',
        maxWidth: 200,
    },
    {
        id: 'ThumbnailURL',
        label: 'Thumbnail',
        minWidth: 170,
        align: 'left',
        maxWidth: 200,
    },
    {
        id: 'Nationality[0]',
        label: 'Nationality',
        minWidth: 170,
        align: 'left',
        maxWidth: 200,
    },
    {
        id: 'Date',
        label: 'Date',
        minWidth: 170,
        align: 'left',
        maxWidth: 200,
    },
    {
        id: 'menu',
        label: '',
        minWidth: 170,
        align: 'left',
        maxWidth: 200,
    },
];

export default function ArtWorkTable({ search }) {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [artWork, setArtWork] = useState([]);
    const [searchArtWorkList, setSearchArtWorkList] = useState([]);
    const getArtistRes = useGetArtWorkQuery(page);
    const [searchArtistReq, searchArtistRes] = useSearchArtWorkMutation();

    const chooseArtistData = () => {
        if (search) {
            return (searchArtWorkList)
        } else {
            return (artWork)
        }
    }
    //get ArtWork
    useEffect(() => {
        if (getArtistRes?.isSuccess) {
            dispatch(changingLoadingStatus(false));
            setArtWork(getArtistRes?.data);
        }
        if (getArtistRes?.isLoading || getArtistRes?.isFetching) {
            dispatch(changingLoadingStatus(true));
        }
        if (getArtistRes?.isError) {
            dispatch(changingLoadingStatus(false));
        }
    }, [getArtistRes])

    //search Art Work by title
    useEffect(() => {
        if (searchArtistRes?.isSuccess) {
            dispatch(changingLoadingStatus(false));
            setSearchArtWorkList(searchArtistRes?.data);
        }
        if (searchArtistRes?.isLoading) {
            dispatch(changingLoadingStatus(true));
        }
        if (searchArtistRes?.isError) {
            dispatch(changingLoadingStatus(false));
        }
    }, [searchArtistRes])

    useEffect(() => {
        if (search) {
            searchArtistReq({ search: search, page: 1 });
        }
    }, [search])

    //Page inc and dec

    const PageInc = () => {
        if (artWork !== []) {
            setPage(prevPage => prevPage + 1);
        }
    }

    const PageDec = () => {
        if (page > 0) {
            setPage(prevPage => prevPage - 1);
        }
    }
    return (
        <>
            <Paper sx={{ position: 'relative', width: '100%', overflow: 'hidden', m: "16px 0" }}>
                <Loading />
                <TableContainer sx={{ maxHeight: 600, minHeight: 600 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow >
                                {columns.map((column) => (
                                    <TableCell
                                        sx={{ fontWeight: '600' }}
                                        key={column.id}
                                        align={column.align}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {chooseArtistData()
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            <TableCell sx={{ textOverflow: 'ellipsis', maxWidth: "200px", overflow: 'hidden' }} align='left'>

                                                <Tooltip title={row.Title} placement="top-start">
                                                    <Typography sx={{ height: "20px", lineHeight: "20px", overflow: 'hidden' }}>
                                                        {row.Title}
                                                    </Typography>
                                                </Tooltip>
                                            </TableCell>
                                            <TableCell sx={{ textOverflow: 'ellipsis', maxWidth: "200px", overflow: 'hidden' }} align='left'>

                                                <Tooltip title={row.Artist[0]} placement="top-start">
                                                    <Typography sx={{ height: "20px", lineHeight: "20px", overflow: 'hidden' }}>
                                                        {row.Artist[0]}
                                                    </Typography>
                                                </Tooltip>
                                            </TableCell>
                                            <TableCell sx={{ textOverflow: 'ellipsis', maxWidth: "200px", overflow: 'hidden' }} align='left'>

                                                <Tooltip title={row.URL} placement="top-start">
                                                    <Typography sx={{ height: "20px", lineHeight: "20px", overflow: 'hidden' }}>
                                                        {row.URL}
                                                    </Typography>
                                                </Tooltip>
                                            </TableCell>
                                            <TableCell sx={{ textOverflow: 'ellipsis', maxWidth: "200px", overflow: 'hidden' }} align='left'>

                                                <Tooltip title={row.ThumbnailURL} placement="top-start">
                                                    <Typography sx={{ height: "20px", lineHeight: "20px", overflow: 'hidden' }}>
                                                        {row.ThumbnailURL}
                                                    </Typography>
                                                </Tooltip>
                                            </TableCell>
                                            <TableCell sx={{ textOverflow: 'ellipsis', maxWidth: "200px", overflow: 'hidden' }} align='left'>

                                                <Tooltip placement="top-start">
                                                    <Typography sx={{ height: "20px", lineHeight: "20px", overflow: 'hidden' }}>
                                                        {row.Nationality[0]}
                                                    </Typography>
                                                </Tooltip>
                                            </TableCell>
                                            <TableCell sx={{ textOverflow: 'ellipsis', maxWidth: "200px", overflow: 'hidden' }} align='left'>

                                                <Tooltip placement="top-start">
                                                    <Typography sx={{ height: "20px", lineHeight: "20px", overflow: 'hidden' }}>
                                                        {row.Date}
                                                    </Typography>
                                                </Tooltip>
                                            </TableCell>
                                            <TableCell align='right' id="menu" >
                                                <CustomMenu id={row._id} />
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                <div style={{ marginLeft: '16px' }}>
                    <Button color="primary" style={{ marginLeft: '24px' }} onClick={PageInc}>Next</Button>
                </div >
                <Button color="primary" onClick={PageDec}>Previous</Button>
            </div>
        </>
    );
}
