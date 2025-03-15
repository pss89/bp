import { Link } from 'react-router-dom';

export default function EmptyPage() {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen">
            <div className="w-full text-center">
                <h2>잘못된 접근입니다.</h2>
                <Link to="/">돌아가기</Link>
            </div>
            </div>
        </>
    );
}