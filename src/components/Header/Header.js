import React from "react";
import "./Header.css";

const Header = props => (
    <div>
        <div className="header">
            <div className="title">{props.children}</div>

            <div className="scores">
                Score: {props.score} | Top Score: {props.highscore}
            </div>
        </div>
        <div>
            <div className="subheader">
                Click on an image to earn points, but don't click on any more than once!
            </div>
        </div>
    </div>
);

export default Header;