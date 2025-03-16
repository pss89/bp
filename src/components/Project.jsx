// import { useState } from 'react';
import PropTypes from 'prop-types';

const Project = ({ type }) => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full text-center">
          <h1>Project {type}</h1>
        </div>
      </div>
    </>
  );
}

// PropTypes 추가
Project.propTypes = {
  type: PropTypes.string.isRequired, // title은 반드시 문자열이어야 하며, 전달되어야 합니다.
};

export default Project