import React from 'react';
import "./Button.less";

const Button = (props) => {
        return (
                <div className="button-container">
                        <div className={`button ${props.selected && "selected"}`} onClick={props.onClick} >
                                <div className="icon" style={{ backgroundImage: `url(${props.icon})` }}></div>
                                <div><div className="expanded-text">{props.selected && props.expandedText}</div></div>
                        </div>
                </div>
        );
}

export default Button;