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
                <h2>잘못된 접근입니다.</h2>
                <Link to="/">돌아가기</Link>
                <Button onClick={click}>클릭</Button>
            </div>
            </div>
        </>
    );
}