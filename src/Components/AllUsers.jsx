import {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';

export const AllUsers = () => {
    const history = useHistory();
    const [users, setUsers] = useState([]);
    const getUsers = () => {
        fetch("https://61988da9164fa60017c230e7.mockapi.io/users", {
            method: "GET",
        })
        .then((data) => data.json())
        .then((usr) => setUsers(usr))
    }
    useEffect(getUsers, [])

    const deleteUsers = (id) => {
        fetch(`https://61988da9164fa60017c230e7.mockapi.io/users/${id}`, {
            method: "Delete",
        })
        .then(() => getUsers());
    }

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#4fa39b82',
        color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
      },
    }));
    
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      '&:last-child td, &:last-child th': {
        border: 0,
      },
    }));

    return (
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table" style={{marginTop: '20px'}}>
        <TableHead>
          <TableRow>
          <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Username</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell></StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <StyledTableRow>
              <StyledTableCell> {row.id} </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.username}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.phone}</StyledTableCell>
              <StyledTableCell align="right">
              <IconButton color= 'primary' style={{marginRight:20}} onClick={() => history.push(`/users/${row.id}`)}>
                <InfoIcon />
              </IconButton>
              <IconButton color='secondary'>
                 <EditIcon style={{marginRight:20}} onClick={() => history.push('/users/edit-users/' +row.id)} />
                </IconButton>

                <IconButton color='error' onClick={() => deleteUsers(row.id)}>
                 <DeleteIcon />
                </IconButton>
                </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
    
}