import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { BsThreeDotsVertical } from "react-icons/bs";
import Button from '../../../component/button';
import { useGetArtistMutation, useSearchArtistMutation } from '../../../redux/services/artist';
import { useDispatch } from 'react-redux';
import { changingLoadingStatus } from '../../../redux/slices/loading';
import Loading from '../../../component/Loading';

const columns = [
    { id: 'ConstituentID', label: 'Constituent ID', minWidth: 170 },
    {
        id: 'DisplayName',
        label: 'Display Name',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'ArtistBio',
        label: 'Artist Bio',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'Nationality',
        label: 'Nationality',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'Gender',
        label: 'Gender',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'BeginDate',
        label: 'Begin Date',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'EndDate',
        label: 'End Date',
        minWidth: 170,
        align: 'right',
    },
];

export default function ArtistTable({ search }) {
    const [artist, setArtist] = useState([])
    const [searchArtistList, setSearchArtistList] = useState([])
    const [page, setPage] = useState(1);
    const dispatch = useDispatch()
    const [getArtistReq, getArtistRes] = useGetArtistMutation();
    const [searchArtistReq, searchArtistRes] = useSearchArtistMutation();

    const chooseArtistData = () => {
        if (search) {
            return (searchArtistList)
        } else {
            return (artist)
        }
    }
    useEffect(() => {
        if (getArtistRes?.isSuccess) {
            dispatch(changingLoadingStatus(false));
            setArtist(getArtistRes?.data);
        }
        if (getArtistRes?.isLoading) {
            dispatch(changingLoadingStatus(true));
        }
        if (getArtistRes?.isError) {
            dispatch(changingLoadingStatus(false));
        }
    }, [getArtistRes])

    useEffect(() => {
        if (searchArtistRes?.isSuccess) {
            dispatch(changingLoadingStatus(false));
            setSearchArtistList(searchArtistRes?.data);
        }
        if (searchArtistRes?.isLoading) {
            dispatch(changingLoadingStatus(true));
        }
        if (searchArtistRes?.isError) {
            dispatch(changingLoadingStatus(false));
        }
    }, [searchArtistRes])

    useEffect(() => {
        getArtistReq(page);
    }, [page])

    useEffect(() => {
        console.log(search)
        if (search) {
            searchArtistReq({ search: search, page: 1 });
        }
    }, [search])

    //Page inc and dec

    const PageInc = () => {
        if (artist !== []) {
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
            <Paper sx={{ position: 'relative',width: '100%', overflow: 'hidden', m: "16px 0" }}>
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
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                                <TableCell
                                    sx={{ fontWeight: '600' }}
                                    style={{ minWidth: 70 }}
                                >

                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {chooseArtistData()
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                            <TableCell align='right'>
                                                <BsThreeDotsVertical />
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
