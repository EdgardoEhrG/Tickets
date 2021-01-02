import React from "react";
import { useHistory } from "react-router-dom";

import PropTypes from "prop-types";

const Box = (props) => {
  const { cardValue, title, iconClass, cardClass, type, status } = props;
  const history = useHistory();
  const navigateToPage = (status, type) => {
    history.push(`/tickets/${status}/${type}`);
  };

  return (
    <div className="col-md-6 col-xl-4" onClick={navigateToPage(status, type)}>
      <div className="card-box border">
        <i className={`${iconClass} font-24`}></i>
        <h3 className={cardClass}>{cardValue}</h3>
        <p className="text-uppercase font-13 font-weight-medium mb-1">
          {title}
        </p>
      </div>
    </div>
  );
};

Box.propTypes = {
  title: PropTypes.string,
  cardValue: PropTypes.any,
  iconClass: PropTypes.string,
  cardClass: PropTypes.string,
  type: PropTypes.string,
};

export default Box;
