import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Alert,
  Box,
  Button,
  FormControlLabel,
  Grid,
  Modal,
  Switch,
  TextField,
  Typography,
  CardMedia,
} from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Bolt, Padding } from '@mui/icons-material';


export default function Darhboard() {
  const [currentID, setCurrentID] = useState(null);
  const [deleteID, setDeleteID] = useState(null);
  const [lsFilm, setLsFilm] = useState([]);
  const [data, setData] = useState({
    title: "",
    year: 2000,
    nation: "",
    img: "",
    info: "",
    trailer: "",
    attractive: true,
  })

  const handleOnChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
  
    if (name === 'trailer' && value.includes('youtube.com')) {
      const url = new URL(value);
      const videoId = url.searchParams.get('v');
  
      if (videoId) {
        value = videoId;
      }
    }
  
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const FetchFilms = () => {
    axios.get(`https://6543a5d801b5e279de20b847.mockapi.io/Film-project`)
      .then((res) => {
        console.log(res.data);
        setLsFilm(res.data);
      })
      .catch()
  }

  useEffect(() => {
    FetchFilms();
  }, [])

  const handleClose = () => {
    setCurrentID(null);
  };

  const handleCloseConfirmDelete = () => {
    setDeleteID(null);
  };

  const handleDelete = () => {
    axios.delete(`https://6543a5d801b5e279de20b847.mockapi.io/Film-project/${deleteID}`)
      .then(() => {
        //tắt model
        setDeleteID(null);
        //lấy danh sách mới nhất
        FetchFilms();

        alert("Delete successfully!!!")
      })
      .catch()

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //currentID = 0 => Chưa có id => create
    //currentID != 0 => Có id => update
    if(currentID===0){
      axios.post(`https://6543a5d801b5e279de20b847.mockapi.io/Film-project`, data)
      .then(res => {
        setCurrentID(null);
        FetchFilms();
        alert("Create Successfully!!!")
      })
      .catch()
    }else{
      axios.put(`https://6543a5d801b5e279de20b847.mockapi.io/Film-project/${currentID}`, data)
      .then(res => {
        setCurrentID(null);
        FetchFilms();
        alert("Update Successfully!!!")
      })
      .catch()
    }
    
  };

  useEffect(() => {
    if (currentID) {
      axios.get(`https://6543a5d801b5e279de20b847.mockapi.io/Film-project/${currentID}`)
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        })
        .catch()
    } else {
      setData({
        title: "",
        year: 2000,
        nation: "",
        img: "",
        info: "",
        trailer: "",
        attractive: true,
      })
    }
  }, [currentID])

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <TableContainer component={Paper}>
      <Button
        variant='contained'
        onClick={() => {
          setCurrentID(0);
        }}
      >
        Add
      </Button>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='center'>Image</TableCell>
            <TableCell align='center' sx={{ maxWidth: 230 }}>Title</TableCell>
            <TableCell align='center'>Nation</TableCell>
            <TableCell align='center'>Year</TableCell>
            <TableCell align='center' sx={{ maxWidth: 500 }}>Info</TableCell>
            <TableCell align='center'>Trailer Link</TableCell>
            <TableCell align='center'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lsFilm.map((film) => (
            <TableRow key={film.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align='center' sx={{ Padding: 0 }}><CardMedia sx={{ height: 120, borderRadius: 4, width: 150, objectFit: 'contain' }} image={film.img} title="green iguana" /></TableCell>
              <TableCell component='th' scope='row' sx={{ maxWidth: 230 }}>
                {film.title}
              </TableCell>
              <TableCell align='center'>{film.nation}</TableCell>
              <TableCell align='center'>{film.year}</TableCell>
              <TableCell align='center' sx={{ maxWidth: 500 }}>{film.info}</TableCell>

              <TableCell align='center'>{film.trailer}</TableCell>
              <TableCell align='center'>
                <Button
                  variant='contained'
                  style={{
                    marginRight: 10,
                  }}
                  onClick={() => {
                    setCurrentID(film.id);
                  }}
                >
                  Update
                </Button>
                <Button
                  variant='contained'
                  color='error'
                  onClick={() => {
                    setDeleteID(film.id);
                    console.log(film.id)
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Modal
        open={currentID !== null}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          {/* <Alert variant='filled' severity='error'>
            This is an error alert — check it out!
          </Alert> */}
          <form onSubmit={handleSubmit}>
            <h5>{currentID === 0 ? 'Add new' : 'Update'}</h5>
            <Grid container spacing={2}>
              {/* Input fields for form */}
              {/* Example: */}
              <Grid item xs={12}>
                <TextField value={data.title} onChange={handleOnChange} variant='outlined' required fullWidth id='title' label='Title' name='title' />
              </Grid>
              <Grid item xs={12}>
                <TextField value={data.nation} onChange={handleOnChange} variant='outlined' required fullWidth id='nation' label='Nation' name='nation' />
              </Grid>
              <Grid item xs={12}>
                <TextField value={data.year} onChange={handleOnChange} type='number' variant='outlined' required fullWidth id='year' label='Year' name='year' />
              </Grid>
              <Grid item xs={12}>
                <TextField value={data.info} onChange={handleOnChange} variant='outlined' multiline rows={4} required fullWidth id='info' label='Info' name='info' />
              </Grid>
              <Grid item xs={12}>
                <TextField value={data.img} onChange={handleOnChange} variant='outlined' required fullWidth id='img' label='Image Link' name='img' />
              </Grid>
              <Grid item xs={12}>
                <TextField value={data.trailer} onChange={handleOnChange} variant='outlined' required fullWidth id='trailer' label='Trailer Link' name='trailer' />
              </Grid>

            </Grid>
            <Button
              style={{
                marginTop: 20,
              }}
              type='submit'
              variant='contained'
              color='primary'
              fullWidth
            >
              Submit
            </Button>
          </form>
        </Box>
      </Modal>

      <Modal
        open={deleteID !== null}
        onClose={handleCloseConfirmDelete}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Confirm
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Do you want to delete this record?
          </Typography>

          <Button
            style={{
              marginTop: 20,
            }}
            variant='contained'
            color='error'
            fullWidth
            onClick={handleDelete}
          >
            Delete
          </Button>
        </Box>
      </Modal>
    </TableContainer>
  );
}
