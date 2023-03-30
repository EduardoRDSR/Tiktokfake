import React, { useRef, useState } from 'react';
import VideoFooter from './components/footer/VideoFooter';
import "./video.css";

function Video() {
    const videoRef = useRef(null);
    const [play, setPlay] = useState(false);

    function handdlestart(){
        if(play){
            videoRef.current.pause();
            setPlay(false);
        } else {
            videoRef.current.play();
            setPlay(true);
        }
    }

  return (
    <div className='video'>
        <video 
            className='video__player' 
            ref={videoRef}
            onClick={handdlestart}
            loop
            src="https://cdn.discordapp.com/attachments/1090791451383832711/1090802987225595964/Snapinsta.app_video_329238296_643045674488277_8890415696715888239_n.mp4">
        </video>
        {/* Side bar */}
        <VideoFooter />
    </div>
  );
}

export default Video;