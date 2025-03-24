import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const Navbar = ({navbarItems}) => {
  // const [count, setCount] = useState(0);

  // [] deps의 역할 (의존성 배열 (dependency array))
  // 어떠한 이벤트에 따라 useEffect가 실행되어야 하는지를 정의하는 배열

  // useEffect(() => {
  //   console.log(navbarItems, count);
  // }, [count]);

  // [] deps의 역할 (의존성 배열 (dependency array))
  // 어떠한 이벤트에 따라 useEffect가 실행되어야 하는지를 정의하는 배열

  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useEffect(() => {
  //   // navbar-dropdown 클래스에 hidden이 없으면 isMenuOpen 상태를 true로 설정, 있으면 false로 설정
  //   setIsMenuOpen(!document.getElementById("navbar-dropdown").classList.contains("hidden"));
  // }, []);

  function menu_open() {
    document.getElementById("navbar-dropdown").classList.toggle("hidden");
    let dropDownMenus = document.getElementsByClassName("dropDownMenu");
    for (let i = 0; i < dropDownMenus.length; i++) {
      dropDownMenus[i].classList.add("hidden");
    }
  }

  function dropDownMenuOpen({index}) {
    return function (event) {
      const menu = document.getElementById("dropDownMenu_" + index);
      const button = event.currentTarget; // 클릭한 버튼 요소
  
      if (!menu || !button) return;
  
      const rect = button.getBoundingClientRect(); // 버튼 위치 정보 가져오기
      const top = (rect.bottom + window.scrollY) + 10; // 버튼 아래로 배치

      // console.log(isMenuOpen);
      let isMenuOpen = !document.getElementById("navbar-dropdown").classList.contains("hidden");

      let left = (rect.left + window.scrollX) - 50;  // 버튼과 동일한 왼쪽 정렬
      if (isMenuOpen) {
        left = (rect.left + window.scrollX)
      }
  
      // 드롭다운 위치 설정
      menu.style.position = "absolute";
      menu.style.transform = `translate3d(${left}px, ${top}px, 0px)`;
      menu.style.inset = "0px auto auto 0px"; // inset 제거
      menu.style.margin = "0px";

      // 드롭다운 메뉴 표시/숨김 토글
      menu.classList.toggle("hidden");
    };
  }

  const location = useLocation(); // 현재 URL 가져오기

  // location_path 에서 마지막 뒤에만 제거
  let location_main_path = location.pathname.split("/");
  location_main_path.pop();
  location_main_path = location_main_path.join("/");

  return (
    <>
      <nav className="bg-gray-900 border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/bp/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/bp/assets/img/icon/buchet_icon.png" className="h-8" alt="Buchet Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Buchet Portfolio</span>
          </Link>
          <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 
            rounded-lg md:hidden focus:outline-none focus:ring-2 dark:text-gray-400 
            hover:bg-gray-700 focus:ring-gray-600" onClick={menu_open}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg 
              md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-800 
              md:bg-gray-900 border-gray-700">
              {navbarItems.map((item, index) => {
                if (item.subItems) {
                  return (
                    <li key={index}>
                      <button className={`flex items-center justify-between w-full py-2 px-3 rounded-sm 
                        md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto  
                        md:dark:hover:text-blue-500 dark:focus:text-white border-gray-700 hover:bg-gray-700 
                        md:dark:hover:bg-transparent
                        ${location_main_path === item.path ? "text-blue-500" : "text-white"}`} onClick={dropDownMenuOpen({index})}>{item.title} 
                        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg>
                      </button>
                      <div id={"dropDownMenu_"+index} className={`dropDownMenu z-10 font-normal divide-y rounded-lg shadow-sm w-44 
                        bg-gray-700 divide-gray-600 hidden`} >
                        <ul className="py-2 text-sm text-gray-400">
                          {item.subItems.map((subItem, key) => (
                            <li key={key}>
                              <Link key={key} to={subItem.path} className={`block px-4 py-2 hover:bg-gray-600 
                                dark:hover:text-white
                                ${location.pathname === subItem.path ? "text-blue-500" : ""}
                                `}>{subItem.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                } else {
                  return (
                    <li key={index}>
                      <Link to={item.path} className={`block py-2 px-3 ounded-sm md:border-0 
                        md:p-0
                        ${location.pathname === item.path ? "text-blue-500" 
                        : "text-white md:hover:bg-transparent md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent" }`}
                        >{item.title}</Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </nav>

      {/* <nav className="w-full fixed top-0 start-0 bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/bp/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/bp/assets/img/icon/buchet_icon.png" className="h-8" alt="Buchet Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Buchet Portfolio</span>
          </a>
          <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden 
            focus:outline-none focus:ring-2 text-gray-400 
            hover:bg-gray-700 focus:ring-gray-600" onClick={menu_open}>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 
              rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
              {navbarItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="text-sm block py-2 px-3 rounded-sm md:border-0 md:p-0 
                    text-white md:hover:text-blue-500 hover:bg-gray-700 
                    hover:text-white md:hover:bg-transparent">{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav> */}
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
  ).isRequired
};

export default Navbar