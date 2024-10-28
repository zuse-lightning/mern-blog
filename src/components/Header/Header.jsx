import "./style.css";

const Header = () => {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?cs=srgb&dl=pexels-artur-roman-158558-1167355.jpg&fm=jpg&_gl=1*19l9s9m*_ga*MjEyNDc5Mjk0OS4xNzMwMTI4NDE4*_ga_8JE65Q40S6*MTczMDEzNjc3Mi4yLjEuMTczMDEzNzc3OS4wLjAuMA.." alt="" />
    </div>
  );
};

export default Header;