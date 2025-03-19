// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faCoffee, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// library.add(faCoffee, faCheckCircle);
import profileImage from '../assets/img//common/pss_caricature.png';

export default function Main() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full text-center">

        {/* <FontAwesomeIcon icon="coffee" />
        <FontAwesomeIcon icon="check-circle" style={{ color: 'green' }} />
        <h1>Main</h1> */}
        <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
          <div className="flex items-center justify-between w-full max-w-7xl px-8">
              {/* <!-- 이미지 섹션 --> */}
              <div className="w-1/3 flex justify-center">
                  <img src={profileImage} alt="Profile Picture" className="rounded-full w-60 h-60 object-cover" />
                  {/* <picture>
                    <source srcSet="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" media="(max-width: 600px)" />
                    <source srcSet="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" media="(min-width: 601px)" />
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="Example" />
                  </picture> */}
              </div>
              <div className="h-60 border-4 border-solid border-red-400"></div>
              {/* <!-- 텍스트 섹션 --> */}
              <div className="ml-8">
                  <h1 className="text-4xl font-semibold">Web Developer Portfolio</h1>
                  <p className="mt-4 text-lg font-light">사용자 중심의 서비스 개발을 지향하는 개발자, 박성식입니다.</p>
              </div>
          </div>
        </div>

      </div>
    </div>
  )
}