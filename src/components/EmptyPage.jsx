import { Link } from 'react-router-dom';
import { Button } from "flowbite-react";

// react에서 click 이벤트 주기
export default function EmptyPage() {
    function click() {
        alert("Hello, world!");
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-full text-center">
                    {/* <h2>잘못된 접근입니다.</h2>
                    <Link to="/">돌아가기</Link>
                    <Button onClick={click}>클릭</Button> */}
                    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-800">
                        <div className="text-center">
                            <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400">404</p>
                            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl dark:text-gray-400">Page not found</h1>
                            <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">Sorry, we couldn’t find the page you’re looking for.</p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                {/* <a href="/" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm 
                                    font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 
                                    focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</a> */}
                                <Link to="/bp/" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm 
                                    font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 
                                    focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go Back Home</Link>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}