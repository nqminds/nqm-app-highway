import React from "react";
import PropTypes from "prop-types";

const Camera = ({image}) => {
  if (image !== false) {
    return (
      <img src={`data:image/jpeg;base64,${image}`} />
    );
  } else {
    return null;
  }
};

Camera.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default Camera;
