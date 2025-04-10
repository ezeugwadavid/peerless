import React from "react";
import { CardContainer } from "./card.styles";
import PropTypes from "prop-types";

//this is the reuseable card component of the dashboard
const Card = ({ image, title, description }) => {
  return (
    <CardContainer>
      <img src={image} alt={title} />
      <article>
        <h3>{title}</h3>
        <p>{description}</p>
      </article>
    </CardContainer>
  );
};
// prop types for the card component
Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
