import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import HeaderMO from "./header_mo";
import { useMediaQuery } from "react-responsive";

export default function Layouts() {
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});
    const location = useLocation();
    const primaryColor = '#317E71';

    const [footerColor, setFooterColor] = useState(null)

    // ==========================================
    // ★ 1. 주소에 따라 상단 타이틀 글씨를 바꿔주는 함수
    // ==========================================
    const getPageTitle = (path) => {
        // 주소판(메뉴판)을 만듭니다. 순서는 상관없습니다!
        const titles = {
            // 행사 안내
            '/about/intro': '행사 안내',
            '/about/overview': '행사 개요',
            '/about/schedule': '행사 일정 안내',
            '/about/tour': '지역 관광 안내',

            // 프로그램 안내
            '/program/opening': '개막식',
            '/program/stage': '무대 프로그램',
            '/program/side': '부대 프로그램',
            '/program/trekking': '트레킹 프로그램',
            // '/program/food': '먹거리 프로그램',

            // 오시는 길
            '/location/map': '행사장 위치',
            '/location/layout': '행사장 배치도',
            '/location/parking': '주차 안내',
            '/location/transport': '대중교통 안내',

            // 게시판
            '/board/notice': '게시판',
            '/board/faq': '자주하는 질문',
            '/board/qna': 'Q&A'
        };

        // 현재 path와 정확히 일치하는 값을 꺼내주고, 없으면 기본값('행사 안내')을 줍니다.
        return titles[path] || '행사 안내';
    };
    // 현재 주소를 함수에 넣어서 타이틀을 뽑아냅니다.
    const pageTitle = getPageTitle(location.pathname);

    // ==========================================
    // ★ 페이지 이동 시 스크롤 맨 위로
    // ==========================================
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    // ==========================================
    // ★ 2. 주소에 따라 진짜 HTML(Body) 배경색 바꾸기
    // ==========================================

// #16284C
    useEffect(() => {
        // [수정된 부분] 더 길고 구체적인 주소('/location/layout')를 '먼저' 검사해야 합니다!
        if (location.pathname.includes('/location/layout') || location.pathname.includes('/location/transport')) {
            document.body.style.backgroundColor = '#EBF5A8';
            setFooterColor('EBF5A8')
        } else if (location.pathname.includes('/location')) {
            // 위에서 안 걸러진 나머지 /location 관련 페이지들
            document.body.style.backgroundColor = '#EFF5B8';
            setFooterColor('EFF5B8')
        } else if (location.pathname.includes('/stage')) {
            // 위에서 안 걸러진 나머지 /location 관련 페이지들
            document.body.style.backgroundColor = '#16284C';
            setFooterColor('16284C')
        } else {
            document.body.style.backgroundColor = '#FFFFFF';
            setFooterColor('FFFFFF')
        }

        return () => {
            document.body.style.backgroundColor = '#FFFFFF';
            setFooterColor('FFFFFF')
        };
    }, [location.pathname]);

    return (
        <div style={{minWidth : isMobile ? null : 1200}}>
            {location.pathname === "/" ? (
                <div style={{
                    paddingTop: 125,
                    paddingBottom: isMobile ? 30 : 0,
                    backgroundImage: 'url(/background.png)',
                    backgroundPosition: 'center top',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-end'
                }}>
                    {isMobile ? <HeaderMO  back={false}/> : <Header back={false}/>}
                    <img
                        src={isMobile ? '/mo/main.png' : '/pc/main.png'}
                        width={isMobile ? '90%' : '65%'}
                        alt=""
                    />
                </div>
            ) : (
                <>
                    {isMobile ? <HeaderMO/> : <Header/>}
                </>
            )}

            {location.pathname === "/" ? <></> : <>
                <div style={{
                    paddingTop: isMobile ? 60 : 100,
                    backgroundImage: 'linear-gradient(to right, #317E71 0%, #2A6256 21%, #214D43 37%, #1B3E37 53%, #193A33 66%)',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <img src={isMobile ? "/mo/subTitle.png" : "/pc/subTitle.png"} width={isMobile ? 250 : 700}
                         style={{paddingTop: isMobile ? 30 : 20}} alt=""/>
                </div>

                {/* 상단 타이틀 영역 */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: isMobile ? 30 : 50
                }}>
                    <div style={{
                        width: 2,
                        height: isMobile ? 30 : 40,
                        backgroundColor: primaryColor,
                        opacity: 0.5,
                        marginBottom: 15
                    }}/>
                    <div style={{fontSize: isMobile ? 24 : 60, color: primaryColor, fontWeight: 400}}>
                        {/* ★ 3. 고정된 텍스트 대신 변수(pageTitle)를 넣어줍니다! */}
                        {pageTitle}
                    </div>
                </div>
            </>}

            <main

                style={{minWidth : isMobile ? null : 1200, padding: location.pathname === "/" ? 0 : isMobile ? ('0px 16px 100px 16px') : ('0px 0px')}}>
                <Outlet/>
            </main>

            <Footer color={footerColor}/>

        </div>
    );
}