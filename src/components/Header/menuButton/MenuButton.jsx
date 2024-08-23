import "./MenuButton.css"
import { RiMenuLine } from "react-icons/ri";

function MenuButton() {

    return(
        <div className="div-menu-button">
            <button className="menu-button">
                <RiMenuLine className="RiMenuLine "></RiMenuLine>
            </button>
            <span className="span-menu-button">Menu</span>
        </div>
    );
}

export default MenuButton 