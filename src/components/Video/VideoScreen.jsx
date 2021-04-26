import React, { useState, createRef, useEffect } from 'react';
import SampleVideo from "../../asset/videos/SampleVideo_1280x720_1mb.mp4";
import "./VideoScreen.less";

const VideoScreen = () => {
        const video = createRef();
        const [playTime, setPlayTime] = useState("00:00 / 00:00");
        const [juicePercent, setJuicePercent] = useState(0);

        const handleVideo = () => {
                console.log(video);
                if (video.current.paused) video.current.play();
                else video.current.pause();
        }

        useEffect(() => {
                const onTimeUpdate = () => {
                        let currentTime = video?.current?.currentTime ?? 0;
                        let duration = video?.current?.duration ?? 0;
                        let percent = (currentTime / duration) * 100;

                        currentTime = Math.ceil(currentTime);
                        duration = Math.ceil(duration);

                        let finalTimeString = '';

                        let min = Math.floor(currentTime / 60) ?? 0;
                        let sec = currentTime % 60 ?? 0;

                        finalTimeString += `${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`;

                        min = Math.floor(duration / 60) ?? 0;
                        sec = duration % 60 ?? 0;

                        finalTimeString += ` / ${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`

                        setPlayTime(finalTimeString);
                        setJuicePercent(percent);
                }

                video.current.ontimeupdate = onTimeUpdate;
        }, [video]);

        return (
                <div className="video-container" >
                        <video className="video-player" src={SampleVideo} ref={video} onClick={handleVideo} ></video>
                        <div className="controls">
                                <div className="purple-juice-container"><div className="purple-juice" style={{ width: `${juicePercent}%` }} ></div></div>
                                <div className="duration">{playTime}</div>
                        </div>
                </div>
        );
}

export default VideoScreen;