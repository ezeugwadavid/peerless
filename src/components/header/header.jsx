import React, { useState } from "react";
import SearchIcon from "../../assets/search-icon.svg";
import NotificationIcon from "../../assets/notification.svg";
import UserSquareIcon from "../../assets/user-square.svg";
import BuildingIcon from "../../assets/building.svg";
import Hamburger from "../../assets/hamburger.svg";
import { HeaderContainer } from "./header.styles";
import RoundButton from "../reuseable-component/round-button/roundButton";
import Sidebar from "../sidebar/sidebar";

//this is the header component
const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <HeaderContainer>
      <div className="desktopcont">
        <div className="desktopheader">
          <div className="search">
            <div className="searchiconcontainer">
              <img className="searchicon" src={SearchIcon} alt="search icon" />
            </div>
            <input
              className="searchinput"
              type="text"
              placeholder="Search Parameter & Params"
            />
          </div>

          <div className="rightcontent">
            <div className="datesection">
              <div className="firstdate">
                <h3>Thur, Dec 11, 2024 15:32</h3>
              </div>
              <div className="vrtrule"></div>
              <div className="seconddate">
                <h3>
                  Business Date: <span>Thur, Dec 11, 2024 15:32</span>
                </h3>
              </div>
            </div>

            <img
              className="notification"
              src={NotificationIcon}
              alt="notification icon"
            />
            <RoundButton
              image={<img src={UserSquareIcon} />}
              text="Ikoyi Branch"
            />
            <RoundButton
              image={<img src={BuildingIcon} />}
              text="Eric Alawoya"
            />
          </div>
        </div>
      </div>

      <div className="mobilecont">
        <div className="mobileheader">
          <img
            className="hamburger"
            onClick={handleShow}
            src={Hamburger}
            alt="hamburger icon"
          />

          <div className="search">
            <div className="searchiconcontainer">
              <img className="searchicon" src={SearchIcon} alt="search icon" />
            </div>
            <input
              className="searchinput"
              type="text"
              placeholder="Search Parameter & Params"
            />
          </div>
        </div>

        <aside className={`sidebar ${show ? "open" : ""}`}>
          <Sidebar handleClose={handleClose} />
        </aside>
      </div>
    </HeaderContainer>
  );
};

export default Header;
