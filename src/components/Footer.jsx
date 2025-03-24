import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDesktop, faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faDesktop,faMobile);

const Footer = ({deviceType, reactVersion}) => {
  return (
    <>
      <footer className="w-full fixed bottom-0 shadow-sm bg-gray-900 text-white">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm sm:text-center">© 2025 Buchet. All Rights Reserved.</span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
            <li className='mr-3'>
              React Version : {reactVersion}
            </li>
            <li>
              Device : {deviceType ? 
                (<>Mobile <FontAwesomeIcon icon="fa-solid fa-mobile" /></>) 
                : 
                (<>PC <FontAwesomeIcon icon="fa-solid fa-desktop" /></>)
              }
            </li>
            {/* <li>
              DarkMode : {window.matchMedia('(prefers-color-scheme: dark)').matches ? 'ON' : 'OFF'}
            </li> */}
          </ul>
        </div>
      </footer>
    </>
  );
}

// PropTypes 추가
Footer.propTypes = {
  deviceType: PropTypes.string.isRequired,
  reactVersion: PropTypes.string.isRequired
};

export default Footer