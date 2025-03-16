// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Navbar = ({navbarItems}) => {
  // const [count, setCount] = useState(0);

  // [] deps의 역할 (의존성 배열 (dependency array))
  // 어떠한 이벤트에 따라 useEffect가 실행되어야 하는지를 정의하는 배열

  // useEffect(() => {
  //   console.log(navbarItems, count);
  // }, [count]);

  function menu_open() {
    document.getElementById("navbar-default").classList.toggle("hidden");
  }
  return (
    <>
      <nav className="w-full fixed top-0 start-0 bg-white border-gray-200 dark:bg-gray-900">
        {/* <button onClick={() => setCount(count + 1)} className="text-white">
          Click me {count}
        </button> */}
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/bp/assets/img/icon/buchet_icon.png" className="h-8" alt="Buchet Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Buchet Portfolio</span>
          </a>
          <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden 
            hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
            dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={menu_open}>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          {/* <div className="hidden w-full md:block md:w-auto" id="navbar-default"> */}
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {/* <li>
                <Link to={`/bp`} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent 
                  md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 
                  dark:hover:text-white md:dark:hover:bg-transparent">Main</Link>
              </li>
              <li>
                <Link to={`/bp/about`} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent 
                  md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 
                  dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
              </li> */}
              {navbarItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="text-sm block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent 
                    md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 
                    dark:hover:text-white md:dark:hover:bg-transparent">{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

// PropTypes 추가
Navbar.propTypes = {
  navbarItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    })
  ).isRequired,
};

export default Navbar