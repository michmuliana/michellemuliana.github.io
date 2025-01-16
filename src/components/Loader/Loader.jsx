import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./Loader.scss"; 

const Loader = ({ onFinish, duration = 2025 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, duration);

    return () => clearTimeout(timer);
  }, [onFinish, duration]);

  return (
    <div class="loading-screen">
      <div class="cup">
        <div class="handle" />
      </div>
    </div>
  );
};

Loader.propTypes = {
  onFinish: PropTypes.func.isRequired,
  duration: PropTypes.number,
};

export default Loader;
