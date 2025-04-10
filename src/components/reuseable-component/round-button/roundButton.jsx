import React from "react";
import DropdownIcon from "../../../assets/dropdown.svg";
import { RoundButtonContainer } from "./roundButton.styles";
import PropTypes from "prop-types";

//this is the reuseable rounded button component, (at the top right of the main header)
const RoundButton = ({ image, text }) => {
  return (
    <RoundButtonContainer>
      {image}
      <h3>{text}</h3>
      <img className="dropdown" src={DropdownIcon} alt="dropdown icon" />
    </RoundButtonContainer>
  );
};
//this is the prop types for the round button component
RoundButton.propTypes = {
  image: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};
export default RoundButton;
