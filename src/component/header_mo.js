import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HeaderMO({ back = true }) {
    // 1. 메뉴 버튼을 눌렀는지 여부 (상태)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // 2. 애니메이션을 위해 렌더링 자체를 유지할지 여부
    const [shouldRender, setShouldRender] = useState(false);
    const [activeIndex, setActiveIndex] = useState(1);

    // 메뉴 데이터
    const menuData = [
        {
            title: '행사 안내',
            subMenus: [
                { name: <span key="1">한국후계농업<br/>경영인이란?</span>, path: '/info/about' },
                { name: '행사 개요', path: '/info/overview' },
                { name: '행사 일정 안내', path: '/info/schedule' },
                { name: '지역 관광 안내', path: '/info/tour' }
            ]
        },
        {
            title: '프로그램 안내',
            subMenus: [
                { name: '개막식', path: '/program/opening' },
                { name: '무대 프로그램', path: '/program/stage' },
                { name: '부대 프로그램', path: '/program/side' },
                { name: '트레킹 프로그램', path: '/program/trekking' },
                { name: '먹거리 프로그램', path: '/program/food' }
            ]
        },
        {
            title: '오시는 길',
            subMenus: [
                { name: '행사장 위치', path: '/location/map' },
                { name: '행사장 배치도', path: '/location/layout' },
                { name: '주차 안내', path: '/location/parking' },
                { name: '대중교통 안내', path: '/location/transport' }
            ]
        },
        {
            title: '게시판',
            subMenus: [
                { name: '공지사항', path: '/board/notice' },
                { name: '자주하는 질문', path: '/board/faq' },
                { name: 'Q&A', path: '/board/qna' }
            ]
        }
    ];

    // ★ 애니메이션 타이밍 제어 로직
    useEffect(() => {
        if (isMenuOpen) {
            setShouldRender(true); // 열릴 때는 즉시 렌더링
        } else {
            // 닫힐 때는 애니메이션 시간(0.3초)만큼 기다렸다가 렌더링 없앰
            const timeoutId = setTimeout(() => {
                setShouldRender(false);
            }, 300);
            return () => clearTimeout(timeoutId);
        }
    }, [isMenuOpen]);

    const handleMenuClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div style={{ height: 60, position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 999 }}>

            {/* 1. 기본 상단 헤더 */}
            <div style={{
                background: (isMenuOpen || back) ? '#0C2E5E' : 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '18px 0px',
                width: '100%',
                color: 'white',
                zIndex: 999,
                position: 'relative',
                transition: 'background 0.3s ease' // 배경색 전환 부드럽게
            }}>
                <div style={{ flex: 1, textAlign: 'left', paddingLeft: 20 }}>
                    <Link to="/">
                        <img src="/left_logo.svg" width={210} alt="logo"/>
                    </Link>
                </div>

                <div
                    style={{ flex: 1, textAlign: 'right', paddingRight: 20, cursor: 'pointer' }}
                    onClick={() => setIsMenuOpen(true)}
                >
                    <img src="/burger.svg" alt="menu"/>
                </div>
            </div>

            {/* 2. 모바일 풀스크린 오버레이 메뉴 */}
            {shouldRender && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: '#0C2E5E',
                    zIndex: 9999,
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    // ★ 애니메이션 적용 영역 (opacity와 transform을 0.3초 동안 부드럽게)
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
                    transition: 'opacity 0.3s ease, transform 0.3s ease'
                }}>

                    {/* 오버레이 내부 상단 헤더 */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '18px 0px',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                    }}>
                        <div style={{ flex: 1, textAlign: 'left', paddingLeft: 20 }}>
                            <Link to="/" onClick={() => setIsMenuOpen(false)}>
                                <img src="/left_logo.svg" width={210} alt="logo"/>
                            </Link>
                        </div>

                        {/* X 버튼 */}
                        <div
                            style={{ flex: 1, textAlign: 'right', paddingRight: 20, cursor: 'pointer' }}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                    </div>

                    {/* 오버레이 내부 메뉴 리스트 */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        {menuData.map((menu, index) => (
                            <div key={index} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>

                                <div
                                    onClick={() => handleMenuClick(index)}
                                    style={{
                                        padding: '24px 0',
                                        textAlign: 'center',
                                        fontSize: 20,
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        color: activeIndex === index ? '#F2C94C' : 'white',
                                        transition: 'color 0.3s'
                                    }}
                                >
                                    {menu.title}
                                </div>

                                {/* 서브 메뉴 아코디언도 스르륵 열리도록 transition 추가 */}
                                <div style={{
                                    maxHeight: activeIndex === index ? '500px' : '0px',
                                    overflow: 'hidden',
                                    transition: 'max-height 0.4s ease',
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                }}>
                                    <div style={{ padding: '10px 0 20px 0' }}>
                                        {menu.subMenus.map((subMenu, subIndex) => (
                                            <div key={subIndex} style={{ padding: '14px 0', textAlign: 'center' }}>
                                                <Link
                                                    to={subMenu.path}
                                                    onClick={() => setIsMenuOpen(false)}
                                                    style={{
                                                        fontSize: 17,
                                                        color: 'white',
                                                        fontWeight: 400,
                                                        textDecoration: 'none',
                                                        display: 'inline-block',
                                                        width: '100%'
                                                    }}
                                                >
                                                    {subMenu.name}
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 맨 하단 뱃지/로고 영역 */}
                    <div style={{ padding: '40px 0', display: 'flex', justifyContent: 'center' }}>
                        <img src="/right_logo.svg" alt="한농연 전국대회" style={{ width: 80, height: 'auto' }} />
                    </div>

                </div>
            )}
        </div>
    );
}