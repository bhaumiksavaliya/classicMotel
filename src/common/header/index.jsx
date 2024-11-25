import React, { useState } from "react";
import "./header.scss";
import categoryApi from "../../categoryApi/categoryApi";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [dropdownsOpen, setDropdownsOpen] = useState({});

    const openNav = () => {
        setIsNavOpen(true);
        document.body.style.overflowY = "hidden";
    };

    const closeNav = () => {
        setIsNavOpen(false);
        document.body.style.overflowY = "auto";
    };

    const toggleDropdown = (index) => {
        if (categoryApi[index].icon) {
            setDropdownsOpen((prev) => ({
                ...prev,
                [index]: !prev[index],
            }));
        }
    };

    return (
        <header>
            <div className="header-container">
                <div className="header-flex">
                    <div className="header-logo">
                        <Link>CLASSIC MOTEL</Link>
                    </div>
                    <div className="header-items">
                        {categoryApi.map((item, index) => (
                            <div key={index} className="header-item-flex">
                                <NavLink activeClassName="active" to={item.path} >
                                    {item.category}
                                    <div className="border"></div>
                                </NavLink>
                                {item.icon && (
                                    <item.icon
                                        className="down-icon"
                                        onClick={() => toggleDropdown(index)}
                                    />
                                )}
                            </div>
                        ))}
                        <div className="header-enqury-btn">
                            <Link to="/enquiry">
                                <button>Enquire Now</button>
                            </Link>
                        </div>
                        <div onClick={openNav} className="responsive-menu">
                            <AiOutlineMenuFold className="menu-icon" />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`menu ${isNavOpen ? "open" : ""}`}>
                <div className="menu-header-flex">
                    <div className="menu-header-logo">
                        <p>MENU</p>
                    </div>
                    <div className="menu-header-close-btn" onClick={closeNav}>
                        <p>&times;</p>
                    </div>
                </div>
                {categoryApi.map((item, index) => (
                    <div key={index}>
                        <Link to={item.path} onClick={closeNav}>
                            <div className="side-menu-item category">
                                {item.category}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </header>
    );
}

export default Header;
