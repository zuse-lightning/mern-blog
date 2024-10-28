import { Icon } from "semantic-ui-react";
import "./style.css";

const TopBar = () => {
    return (
        <div className="top">
            <div className="topLeft">
                <Icon name="facebook" size="big" />
            </div>
            <div className="topCenter">c</div>
            <div className="topRight">r</div>
        </div>
    );
};

export default TopBar;