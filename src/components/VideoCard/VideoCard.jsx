import React, { useEffect, useState } from 'react';
import "./VideoCard.less";
import More from '../../asset/icons/more.svg';
import Star from "../../asset/icons/star.svg";
import StarOutline from "../../asset/icons/star-outline.svg";
import View from "../../asset/icons/view.svg";

const VideoCard = (props) => {
        const [rating, setRating] = useState([false, false, false, false, false]);

        useEffect(() => {
                let ratingNumber = props.rating ?? 0;
                let rating = [false, false, false, false, false];

                rating.forEach((e, i) => {
                        if (ratingNumber) {
                                rating[i] = true;
                                ratingNumber--;
                        }
                });
                setRating(rating);
        }, [props.rating]);

        return (
                <div className="video-card">
                        <div className="thumbnail-container">
                                <div style={{position: "relative"}}>
                                        <img src={props.thumbnail} alt="thumbnail" />
                                        <div className="duration">{props.duration ?? "00:00"}</div>
                                </div>
                                <div className="juice-container">
                                        <div className="juice" style={{width: `${props.viewPercent ?? 0}%`}} ></div>
                                </div>
                        </div>
                        <div className="details-container">
                                <div className="card-row">
                                        <div className="main-content">
                                                <div>
                                                        <div className="video-description">{props.details ?? ""}</div>
                                                        <div className="video-title">{props.title ?? ""}</div>
                                                </div>
                                                <div className="bottom-details">
                                                        <div>{rating.map((e, i) => <img key={i} src={e ? Star : StarOutline} alt="" className="star" />)}</div>
                                                        <div className="stats">
                                                                <div style={{ fontWeight: 600, fontSize: 10 }}>O</div>
                                                                <div style={{ fontWeight: 500, marginLeft: 5, marginRight: 18 }}>{props.postedOn}</div>
                                                                <img src={View} alt="" style={{ height: "15px" }} />
                                                                <div style={{ fontWeight: 500, marginLeft: 5 }}>{props.views}</div>
                                                        </div>
                                                </div>
                                        </div>
                                        <img src={More} alt="" className="more" />
                                </div>
                        </div>
                </div>
        );
}

export default VideoCard;