import React from 'react';
import { Link } from 'react-router-dom';
const Home = ()=>{
    return(
        <div>
            <h1>홈</h1>
            <p>가장 먼저 보여지는 페이지입니다.</p>
            <ul>
                <li>
                    <Link to={"/about"}>소개</Link>
                </li>
                <li>
                    <Link to={"/profiles/velopert"}>velopert's profile</Link>
                </li>
                <li>
                    <Link to={"/profiles/gildong"}>gildong's profile</Link>
                </li>
                <li>
                    <Link to={"/profiles/void"}>non-exist profile</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;