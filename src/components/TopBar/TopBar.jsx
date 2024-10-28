import { Icon } from "semantic-ui-react";
import "./style.css";

const TopBar = () => {
    return (
        <div className="top">
            <div className="topLeft">
                <Icon name="facebook" className="topIcon" size="big" />
                <Icon name="twitter square" className="topIcon" size="big" />
                <Icon name="instagram" className="topIcon" size="big" />
                <Icon name="pinterest square" className="topIcon" size="big" />
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img
                    className="topImg"
                    src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?cs=srgb&dl=pexels-guilhermealmeida-1858175.jpg&fm=jpg&_gl=1*b3jp2g*_ga*MjEyNDc5Mjk0OS4xNzMwMTI4NDE4*_ga_8JE65Q40S6*MTczMDEyODQxOC4xLjEuMTczMDEyOTE1Mi4wLjAuMA.."
                    alt=""
                />
                <Icon name="search" className="searchIcon" size="big" />
            </div>
        </div>
    );
};

export default TopBar;