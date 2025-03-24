// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faCoffee, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// library.add(faCoffee, faCheckCircle);
import profileImage from '../assets/img//common/pss_caricature.png';

export default function Main() {
  return (
    <div className="flex items-center justify-center min-h-290 bg-gray-800 text-white">
      <div className="md:w-3/4 lg:w-2/4 text-center">
        <div role="status" className="w-full py-3 px-3 space-y-8 md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
          <div className="flex items-center justify-center w-full h-48 rounded-sm sm:w-96">
            <img src={profileImage} alt="Profile Picture" className="rounded-2xl w-80 h-60 object-cover" />
          </div>
          <div className="w-full">
            <div className="md:ml-8 sm:ml-0">
              <h1 className="text-4xl font-semibold">Web Developer Portfolio</h1>
              <p className="mt-4 text-lg font-light break-keep">사용자 중심의 서비스 개발을 지향하는 개발자, 박성식입니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}