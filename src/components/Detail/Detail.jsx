import YouTube from 'react-youtube';
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../../styles/Detail/Detail.css'
import axios from 'axios';

export default function Detail() {
    const { id } = useParams();
    const [filmSelect, setFilmSelect] = useState({});
    
    useEffect(() => {
        axios
          .get(`https://6543a5d801b5e279de20b847.mockapi.io/Film-project/${id}`)
          .then((res) => {
            setFilmSelect(res.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, [id]);
    
    return (
        <div className='container-detail'>
            <div className='film-card'>
                <div className='video-box'>
                    <YouTube videoId={filmSelect.trailer} />
                </div>
                <div className='info-box'>
                    <h2>{filmSelect.title}</h2>
                    <p>Year: {filmSelect .year}</p>
                    <p>Nation: {filmSelect.nation}</p>
                    <p>Descrition: {filmSelect.info}</p>
                </div>
            </div>
        </div>
    )
}
