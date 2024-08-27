import "./SearchZone.css"
import { RxCross2 } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { useEffect } from "react";

function SearchZone(props) {

    useEffect(() => {
        if(props.isSearchActive) {
            document.querySelector(".div-search-zone").style.display = "block";
            document.querySelector("body").style.overflow = "hidden";
        }
        else {
            document.querySelector(".div-search-zone").style.display = "none";
            document.querySelector("body").style.overflow = "visible";
        }
    }, [props.isSearchActive]);


    function handleCancelSearch() {
        props.setIsSearchActive(false);
    }

    return(
        <div className="div-search-zone">
            <div className="div-margin-search-zone">
                <div className="div-pre-search-bar">
                    <p className="pre-search-indication">Perdu ? Que cherchez vous ?</p>
                    <button className="cancel-search-button" onClick={handleCancelSearch}>
                        <RxCross2 className="test-search"/>
                    </button>
                </div>
                <div className="div-search-bar">
                    <button className="search-button-zone">
                        <IoSearch className="search-icon"></IoSearch>
                    </button>
                    <input type="text" className="input-search"></input>
                </div>
            </div>
        </div>
    );
}

export default SearchZone