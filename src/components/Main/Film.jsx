import React, { useEffect, useState } from 'react'
import '../../styles/Main/Film.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Film() {
  // console.log({ film })
  const [arrFilm, setArrFilm] = useState([]);

  useEffect(()=>{
    axios.get(`https://6543a5d801b5e279de20b847.mockapi.io/Film-project`)
    .then((res)=>{
      setArrFilm(res.data);
      console.log(res.data)
    })
    .catch()
  },[])

  const nav = useNavigate();

  const ShowFilm = (id)=> ()=>{
    nav('film/'+id)
  }
  return (
    <div className='container'>

      {arrFilm.map((film,id) => {
        return(
          <div className="card" key={id}>
          <button onClick={ShowFilm(film.id)}>
              <div className="pic">
                <img className="film-picture" src={film.img} />
              </div>
              <div className="info">
                <h1 className="film-name">{film.title}</h1>
                <p className="film-year">{film.year}</p>
                <p className="film-nation">{film.nation}</p>
              </div>
          </button>
        </div>
        )
      })}
    </div >
  )
}
