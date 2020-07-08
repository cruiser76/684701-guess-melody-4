import React from 'react';
import PropTypes from 'prop-types';

const Errors = (props) => {
  const {userErrors} = props;
  const errors = Array(userErrors).fill(``);

  const errorList = errors.map((el, i) => {
    return (<div className="wrong"
      key={`error-${i}`}
    />);
  });

  return (
    <div className="game__mistakes">
      {errorList}
    </div>
  );
};

export default Errors;

Errors.propTypes = {
  userErrors: PropTypes.number.isRequired
};
