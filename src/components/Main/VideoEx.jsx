import React, { Component } from 'react'
import YouTube from 'react-youtube';

export default class VideoEx extends Component {
  render() {
    const videoId = 'ZdzBRbgNs-I'

    const opts={
      height: '360',
      width:'640',
    };
    return (
      <div>
        <YouTube videoId={videoId}/>
      </div>
    )

  }}
