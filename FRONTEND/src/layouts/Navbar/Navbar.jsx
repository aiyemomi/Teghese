import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NavItem from "../NavItem/NavItem";
import DropdownMenu from "../Dropdown/Dropdown";
import { CartContext } from "../../context/CartContext";
import { navItems, navbar_promotions_text } from "../../assets/Dummy/data";
import logo from "../../assets/Actual/logo-cut.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useMemo } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [promoText, setPromoText] = useState(0);

  const [promoOpacity, setPromoOpacity] = useState(1);
  const { getNumberofCartItems } = useContext(CartContext);

  const [addActiveClassname, setAddActiveClassname] = useState(false);
  const [headerOpen, setHeaderOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const memoizedNavItems = useMemo(() => navItems, [navItems]);

  const handleHeaderOpen = () => {
    setHeaderOpen((prevValue) => !prevValue);
    setAddActiveClassname(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPromoOpacity(0);
      setTimeout(() => {
        if (promoText === navbar_promotions_text.length - 1) {
          setPromoText(0);
        } else {
          setPromoText(
            (prevIndex) => (prevIndex + 1) % navbar_promotions_text.length
          );
        }
        setPromoOpacity(1);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <div className="navbar-section">
      <div className={"navbar-promotions"}>
        <p className="animated-text" style={{ opacity: promoOpacity }}>
          <span className={promoText === 0 ? "" : "exit"}>
            {
              navbar_promotions_text[
                (promoText === 0 ? navbar_promotions_text.length : promoText) -
                  1
              ]
            }
          </span>
        </p>
      </div>
      {!searchActive && (
        <div className="navbar-main-section">
          <div className="navbar-section-title">
            <span className="leftside-icons">
              <span
                className={`menu-icon ${addActiveClassname ? "active" : ""}`}
              >
                <MenuIcon
                  onClick={() => {
                    handleHeaderOpen();
                  }}
                />
              </span>
              <span className="search-icon">
                <SearchOutlinedIcon
                  onClick={() => {
                    // setSearchActive(true);
                  }}
                />
              </span>
            </span>
            <span>
              <Link className="logo-link" to={"/"}>
                <img className="teghese-logo" src={logo} alt="teghese-logo" />
              </Link>
            </span>

            <span className="navbar-icons">
              <Link to="/favorites">
                <FavoriteBorderIcon style={{ color: "black" }} />
              </Link>
              <Link to="/login">
                <PersonOutlineOutlinedIcon style={{ color: "black" }} />
              </Link>

              <Link to="/cart">
                <ShoppingBagOutlinedIcon style={{ color: "black" }} />
              </Link>

              <div className="nav-bag-count">{getNumberofCartItems()}</div>
            </span>
          </div>
          <ul className={`navbar-section-items ${headerOpen ? "open" : ""}`}>
            {memoizedNavItems.map((item) => (
              <NavItem
                key={item.label}
                label={item.label.toUpperCase()}
                path={`/${item.label}`}
                menu={menu}
                setMenu={setMenu.bind(null, item.label)}
                subItems={item.subItems}
                makeVisible={(e) => {
                  setDropdownVisible(e);
                }}
              />
            ))}
          </ul>

          {dropdownVisible && !headerOpen && (
            <DropdownMenu
              images={
                navItems.find((item) => item.label.toLowerCase() === menu)
                  ?.images || []
              }
              makeVisible={(e) => {
                setDropdownVisible(e);
              }}
              subItems={
                navItems.find((item) => item.label.toLowerCase() === menu)
                  ?.subItems || []
              }
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
