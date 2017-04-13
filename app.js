import React from 'react';
import ReactDOM from 'react-dom';
import video from 'videojs-contrib-hls';
import videojs from "video.js";
window.videojs = videojs;

class VideoTest extends React.Component {

  componentDidMount() {

    let options = {};

    this.player = videojs('my-player', options);

    this.player.ready(function(){
      this.play();
    });

    this.player.src({src: "https://hslsslak-a.akamaihd.net/1752604059001/1752604059001_4945270983001_4945249257001.m3u8", type: "application/vnd.apple.mpegurl"})
  }

  render() {
    return (
      <div>
        <video id="my-player"
               className="video-js"
               controls>
        </video>
      </div>);
  }

}

let rootElement = document.getElementById('root');
ReactDOM.render(<VideoTest />, rootElement);