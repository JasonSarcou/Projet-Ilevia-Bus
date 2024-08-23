import "./HeaderButton.css"
function HeaderButton(props) {
    return(
        <a href="google.com">
            <button className="header-button">
                {props.icon}
                <span className="text-header-button">{props.text}</span>
            </button>
        </a>
    );
}

export default HeaderButton