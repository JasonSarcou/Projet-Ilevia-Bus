import "./HeaderLink.css"
function HeaderLink(props) {
    return(
        <a href="google.com" className="a-header">
            {props.icon}
            {props.text}
            {/* <span className="header-link-span">{props.text}</span> */}
        </a>
    );
}

export default HeaderLink