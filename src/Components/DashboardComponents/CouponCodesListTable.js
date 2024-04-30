import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { EditOutlined } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { convertTimeFormat } from '../../utils/convertTimeFormat';
import axios from 'axios';
import BASE_URL from '../../config/apiConfig';
import CouponUpdateForm from './CouponUpdateForm';

function Row({ row, couponCodesData, setCouponCodesData }) {
    const [open, setOpen] = React.useState(false);

    const handleDeleteCoupon = async () => {
        const isConfirmed = window.confirm(`Are you sure you want to delete coupon ${row.coupon_name}?`);
        if (!isConfirmed) { return; }
    
        try {
            const response = await axios.delete(`${BASE_URL}/coupons/${row.coupon_id}`);
            if (response.data.Status === "Success") {
                const updatedCouponCodesData = couponCodesData.filter((coupon) => coupon.coupon_id !== row.coupon_id);
                setCouponCodesData(updatedCouponCodesData);
            } else {
                console.log('Something went wrong!');
            }
        } catch (error) {
            console.log(error);
        }
    }    

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell align="left">{row.coupon_id}</TableCell>
                <TableCell align="left" component="th" scope="row"> {row.coupon_code} </TableCell>
                <TableCell align="left"> { row.coupon_type } </TableCell>
                <TableCell align="left"> { row.coupon_value } </TableCell>
                <TableCell align="left"> { row.coupon_validity === null ? '-' : convertTimeFormat(row.coupon_validity) } </TableCell>
                <TableCell>
                    <IconButton color="primary" aria-label="Edit" onClick={() => setOpen(!open)}>
                        <EditOutlined />
                    </IconButton>
                    <IconButton color="error" aria-label="delete" onClick={handleDeleteCoupon}>
                        <DeleteIcon />
                    </IconButton>
                </TableCell>
            </TableRow>

            <TableRow className='bgLgt1'>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box className='p-4' sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Edit Coupon { row.coupon_code }
                            </Typography>
                            { open && <CouponUpdateForm couponData={row} /> }
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default function CouponCodesListTable({ couponCodesData, setCouponCodesData  }) {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead className='bg-light fw-bold'>
                    <TableRow>
                        <TableCell align="left"> Id </TableCell>
                        <TableCell align="left" > Coupon Code </TableCell>
                        <TableCell align="left"> Type </TableCell>
                        <TableCell align="left"> Value </TableCell>
                        <TableCell align="left"> Validity </TableCell>
                        <TableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {couponCodesData.map((row, index) => (
                        <Row 
                            key={index} 
                            row={row}
                            couponCodesData={couponCodesData} 
                            setCouponCodesData={setCouponCodesData}   
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}