import React, { useState, useEffect } from 'react';
import './Home.less';
import {
    VideoScreen,
    VideoCard,
    Button,
} from '../../components';
import Data from "./dummy";
import Information from "../../asset/icons/information.svg";
import Edit from "../../asset/icons/edit.svg";
import Book from "../../asset/icons/book.svg";
import Comment from "../../asset/icons/comment.svg";
import Plus from "../../asset/icons/plus.svg";
import Share from "../../asset/icons/share.svg";
import Bookmark from "../../asset/icons/bookmark.svg";
import Star from "../../asset/icons/star.svg";
import StarOutline from "../../asset/icons/star-outline.svg";
import View from "../../asset/icons/view.svg";
import YouTubeSearch from "./youtube";


const Home = () => {
    const [buttonState, setButtonState] = useState([true, false, false, false]);
    const tags = ["plains", "earth", "geography", "mountains"];
    const rating = [true, true, true, false, false];

    const buttonSelectHandler = (index) => {
        let state = [false, false, false, false];
        state[index] = true;
        setButtonState(state);
        console.log(state);
    }

    useEffect(() => {
        YouTubeSearch();
    }, []);

    return (
        <div className="home">
            <div>
                <VideoScreen />
                <div className="video-details">
                    <div className="button-container">
                        <Button
                            expandedText={"Overview"}
                            selected={buttonState[0]}
                            icon={Information}
                            onClick={() => buttonSelectHandler(0)}
                        />
                        <Button
                            expandedText={"Notes"}
                            selected={buttonState[1]}
                            icon={Edit}
                            onClick={() => buttonSelectHandler(1)}
                        />
                        <Button
                            expandedText={"Reading material"}
                            selected={buttonState[2]}
                            icon={Book}
                            onClick={() => buttonSelectHandler(2)}
                        />
                        <Button
                            expandedText={"Discussion forum"}
                            selected={buttonState[3]}
                            icon={Comment}
                            onClick={() => buttonSelectHandler(3)}
                        />
                    </div>
                    {
                        buttonState[0] && <div>
                            <div className="tag-container">
                                {tags.map((e, i) => <div className="tag" key={i}>{e}</div>)}
                                <img className="add-tags" src={Plus} alt="" />
                            </div>
                            <div className="overview">
                                <div>
                                    <div className="video-title">JHhdf jdf  seiu sdj sjdfsdhgf87 djb sjd8e hd dfhs  sdfsd fksjfsdg dfsj s s fjsdgsgfs dsjdf sdfsds djhfsddfg dsgfsdfsjgfsgdfuysf4r </div>
                                    <div className="video-details-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                                </div>
                                <div>
                                    <div className="tool-icons">
                                        <img src={Share} alt="" />
                                        <img src={Bookmark} alt="" />
                                    </div>
                                    <div className="tool-icons" style={{marginTop: 40}}>
                                        {rating.map((e, i) => <img key={i} src={e ? Star : StarOutline} alt="" />)}
                                    </div>
                                    <div className="tool-icons" style={{marginTop: 5}}>
                                        <img src={View} alt="" />
                                        <div style={{marginLeft: 4}}>1.5k</div>
                                        <div style={{margin: "0 5px 0 15px", fontSize: 10, fontWeight: 600}}>O</div>
                                        <div>2 days ago</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className="recommended-video">
                <div className="recommended">Recommended</div>
                {
                    Data.map((e, i) => {
                        return (
                            <VideoCard
                                key={i}
                                {...e}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Home;