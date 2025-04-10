import { SidebarContainer, StyledNavLink } from "./sidebar.styles";
import Logo from "../../assets/peerless-logo.svg";
import InfoCircle from "../../assets/info-circle.svg";
import Logout from "../../assets/logout.svg";
import { links } from "../../utils/utils";

//sidebar component
const Sidebar = ({ handleClose }) => {
  const path = window.location.pathname; // get the current path
  return (
    <SidebarContainer>
      <div className="topsection">
        <div className="logosection">
          <img src={Logo} />
          <button onClick={handleClose}>X</button>
        </div>
        <nav className="nav">
          {links.map((link, index) => (
            <StyledNavLink
              key={index}
              to={link.link}
              className={path === link.link ? "active-link" : "navitem"}
            >
              <img src={link.image} alt={link.name} />
              <h3>{link.name}</h3>
            </StyledNavLink>
          ))}
        </nav>
      </div>
      <div className="bottomsection">
        <div className="navitem">
          <img src={InfoCircle} alt="" />
          <h3>IBM</h3>
        </div>
        <div className="navitem">
          <img src={Logout} alt="" />
          <h3>Log Out</h3>
        </div>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
