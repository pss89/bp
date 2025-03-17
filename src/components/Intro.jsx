const Intro = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full text-center">
          <div className="grid mb-8 border border-gray-200 rounded-lg shadow-xs dark:border-gray-600 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">다양한 프로젝트 참여 경험</h3> */}
                <p className="my-4">If you care for your time, I hands down would go with this.</p>
              </blockquote>
              <figcaption className="flex items-center justify-center ">
                  {/* <picture>
                    <source srcSet="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" media="(max-width: 600px)" />
                    <source srcSet="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" media="(min-width: 601px)" />
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="Example" />
                  </picture> */}
              </figcaption>    
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">능동적이고 신중한 업무 처리</h3> */}
                <p className="my-4">Designing with Figma components that can be easily translated to the utility classNamees of Tailwind CSS is a huge timesaver!</p>
              </blockquote>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Legacy/Modern 개발 코드 가리지 않고 개발</h3> */}
                <p className="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application.</p>
              </blockquote>  
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">새로운것에 거부감 없이 다가가려는 진취적인 자세</h3> */}
                <p className="my-4">You have many examples that can be used to create a fast prototype for your team.</p>
              </blockquote>  
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro