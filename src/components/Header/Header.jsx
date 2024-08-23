import "./Header.css"
import HeaderButton from "./headerButton/HeaderButton";
import MenuButton from "./menuButton/MenuButton";
import { FaBasketShopping } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { CiRoute } from "react-icons/ci";
import { RiInformationFill } from "react-icons/ri";
import { BiSolidPurchaseTag } from "react-icons/bi";


import HeaderLink from "./headerLink/HeaderLink";


function Header() {
    return(
        <header>
            <div className="div-header">
                <div className="header-left">
                    <MenuButton></MenuButton>
                    <img src="src\assets\ilevia_logo.webp" className="ilevia-logo"></img>
                </div>
                <div className="header-right">
                    <div className="search-basket-account-buttons">
                        <button className="search-button">
                            <IoSearch className="IoSearch"></IoSearch>
                        </button>
                        <HeaderButton icon={<FaBasketShopping className="logo-header-button"/>} text="Panier"></HeaderButton>
                        <HeaderButton icon={<MdAccountCircle className="logo-header-button"/>} text="Compte"></HeaderButton>
                    </div>
                    <nav>
                        <ul className="nav-list">
                            <li><HeaderLink icon={<FaClock className="logo-header-link"/>} text={"Horaires"}></HeaderLink></li>
                            <li><HeaderLink icon={<CiRoute className="logo-header-link"/>} text={"Itinéraires"}></HeaderLink></li>
                            <li><HeaderLink icon={<RiInformationFill className="logo-header-link"/>} text={"Info Trafic"}></HeaderLink></li>
                            <li><HeaderLink icon={<BiSolidPurchaseTag className="logo-header-link"/>} text={"Acheter"}></HeaderLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header