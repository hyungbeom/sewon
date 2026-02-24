import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Intro from "./component/intro";
import About from "./component/info/about";
import Overview from "./component/info/overview";
import Schedule from "./component/info/schedule";
import Tour from "./component/info/tour";
import Opening from "./component/program/opening";
import Stage from "./component/program/stage";
import Side from "./component/program/side";
import Trekking from "./component/program/trekking";
import Food from "./component/program/food";
import Transport from "./component/location/transport";
import Parking from "./component/location/parking";
import Map from "./component/location/map";
import Layout from "./component/location/layout";
import Layouts from "./component/Layouts";
import Qna from "./component/board/qna";
import Faq from "./component/board/faq";
import Notice from "./component/board/notice";
import {useEffect} from "react";


// ★ 라우터 설계도 (헤더 메뉴의 path와 1:1 완벽 매칭)
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layouts />, // 전체 뼈대(헤더, 푸터)를 잡아주는 컴포넌트
        children: [
            // ==========================================
            // [메인 및 공통 페이지]
            // ==========================================
            {
                path: "", // "도메인/" (메인 홈)
                element: <Intro />,
            },
            // ==========================================
            // 1. [행사 안내] 그룹
            // ==========================================
            {
                path: "info/about", // 한국후계농업경영인이란?
                element: <About />,
            },
            {
                path: "info/overview",
                element: <Overview />,
            },
            {
                path: "info/schedule",
                element: <Schedule />,
            },
            {
                path: "info/tour",
                element: <Tour/>   ,
            },

            // ==========================================
            // 2. [프로그램 안내] 그룹
            // ==========================================
            {
                path: "program/opening",
                element:  <Opening/>   ,
            },
            {
                path: "program/stage",
                element:  <Stage/>   ,
            },
            {
                path: "program/side",
                element:  <Side/>   ,
            },
            {
                path: "program/trekking",
                element:  <Trekking/>   ,
            },
            {
                path: "program/food",
                element:  <Food/>   ,
            },

            // ==========================================
            // 3. [오시는 길] 그룹
            // ==========================================
            {
                path: "location/map",
                element:  <Map/>
            },
            {
                path: "location/layout",
                element:  <Layout/>
            },
            {
                path: "location/parking",
                element: <Parking/>
            },
            {
                path: "location/transport",
                element: <Transport/>
            },

            // ==========================================
            // 4. [게시판] 그룹
            // ==========================================
            {
                path: "board/notice",
                element: <Notice/>
            },
            {
                path: "board/faq",
                element: <Faq/>
            },
            {
                path: "board/qna",
                element: <Qna/>
            },
        ],
    },
]);

export default function App() {


    useEffect(() => {
        let scrollTimeout;

        const handleScroll = () => {
            // 1. 스크롤 발생 시 클래스 추가
            document.documentElement.classList.add('is-scrolling');

            // 2. 기존 타이머 취소
            clearTimeout(scrollTimeout);

            // 3. 스크롤 멈추고 0.8초 뒤 클래스 제거
            scrollTimeout = setTimeout(() => {
                document.documentElement.classList.remove('is-scrolling');
            }, 800);
        };

        // 컴포넌트가 마운트될 때 이벤트 리스너 등록
        window.addEventListener('scroll', handleScroll);

        // 컴포넌트가 언마운트될 때 이벤트 리스너와 타이머 정리 (메모리 누수 방지)
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []); // 빈 배열: 처음 렌더링될 때 딱 한 번만 실행

    return <RouterProvider router={router} />;
}