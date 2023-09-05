import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '../../../component/button';

const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
        id: 'population',
        label: 'Population',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'density',
        label: 'Density',
        minWidth: 170,
        align: 'right',
    },
];

function createData(
    name,
    code,
    population,
    size,
) {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];

export default function ArtWorkTable() {
    const [page, setPage] = React.useState(0);
    const [maxPage, setMaxPage]= React.useState(0);
    const rowsPerPage = 100;

    //set maxium page as per rows per page
    React.useEffect(() =>{
        //rows per page
        const floatCheck = rows.length % rowsPerPage;
        setMaxPage( floatCheck ? parseInt(rows.length/rowsPerPage) : parseInt(rows.length/rowsPerPage) -1 )
    }, [rows])
    
    const PageInc = () =>{        
        console.log(page,maxPage)
        if(page < maxPage ){
            setPage(prevPage => prevPage + 1);
        }
    }

    const PageDec = () =>{
        if(page > 0){
            setPage(prevPage => prevPage - 1);
        }
    }

    return (
        <>
            <Paper sx={{ width: '100%', overflow: 'hidden', m: "16px 0" }}>
                <TableContainer sx={{ maxHeight: 600 }}>
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
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
                <div style={{marginLeft: '16px'}}>
                    <Button color="primary" style={{ marginLeft: '24px' }} onClick={PageInc}>Next</Button>
                </div >
                <Button color="primary" onClick={PageDec}>Previous</Button>
            </div>
        </>
    );
}
