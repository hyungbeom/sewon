import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({back = true}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    // ★ 데이터 구조 개선: 메뉴 이름(name)과 이동할 주소(path)를 짝지어 깔끔하게 분리했습니다.
    const menuData = [
        {
            title: '행사 안내',
            subMenus: [
                { name: <span>한국후계농업 <br/> 경영인이란?</span>, path: 'info/about' },
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
                // { name: '먹거리 프로그램', path: '/program/food' }
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

    return (
        <>
            {/* 메뉴가 열리면 화면 전체를 덮는 어둡고 흐린 오버레이 막 */}
            {isMenuOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(1px)',
                        zIndex: 90,
                    }}
                />
            )}

            {/* 실제 헤더 및 메뉴 영역 */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    zIndex: 100
                }}
                onMouseLeave={() => {
                    setIsMenuOpen(false);
                    setActiveIndex(null);
                }}
            >
                {/* 1. 상단 메인 메뉴 영역 */}
                <div style={{
                    background: (isMenuOpen || back) ? '#0C2E5E' : 'none',
                    borderBottom:isMenuOpen ? '1px solid rgba(255, 255, 255, 0.3)' : 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px 0px',
                    width: '100%',
                    color: 'white',
                    transition: 'background 0.3s'
                }}>
                    <div style={{ flex: 1, textAlign: 'left', paddingLeft: 40 }}>
                        <Link to="/" onClick={() => setIsMenuOpen(false)}>
                            <img src="/left_logo.svg" width={250} alt=""/>
                        </Link>
                    </div>

                    <div
                        style={{
                            flex: 2,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minWidth: 0
                        }}
                        onMouseEnter={() => setIsMenuOpen(true)}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: 48,
                                fontSize: 18,
                                fontWeight: 500,
                                cursor: 'pointer',
                                width: '100%',
                                maxWidth: 720
                            }}
                        >
                            {menuData.map((menu, index) => (
                                <div
                                    key={index}
                                    style={{
                                        flex: 1,
                                        textAlign: 'center',
                                        color: activeIndex === index ? '#F2C94C' : 'white',
                                        transition: 'color 0.2s'
                                    }}
                                    onMouseEnter={() => setActiveIndex(index)}
                                >
                                    {menu.title}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ flex: 1, textAlign: 'right', paddingRight: 40 }}>
                        <img src="/right_logo.svg" alt=""/>
                    </div>
                </div>

                {/* 2. 하단 서브 메뉴 영역 */}
                {isMenuOpen && (
                    <div style={{
                        background: '#0C2E5E',
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                    }}>
                        <div style={{ flex: 1 }}/>

                        <div style={{
                            flex: 1,
                            textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'space-around',
                            fontSize: 16,
                            fontWeight: 500,
                        }}>
                            {menuData.map((menu, index) => (
                                <div
                                    key={index}
                                    style={{
                                        width: 180,
                                        backgroundColor: activeIndex === index ? '#F2C94C' : 'transparent',
                                        color: activeIndex === index ? '#0C2E5E' : 'white',
                                        borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
                                        borderRight: index === menuData.length - 1 ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
                                        padding: '32px 0px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 32,
                                        transition: 'all 0.2s ease-in-out'
                                    }}
                                    onMouseEnter={() => setActiveIndex(index)}
                                >
                                    {/* ★ 핵심 마법: 데이터를 꺼내오면서 한 번에 Link 태그를 입혀줍니다. */}
                                    {menu.subMenus.map((subMenu, subIndex) => (
                                        <Link
                                            key={subIndex}
                                            to={subMenu.path}
                                            onClick={() => setIsMenuOpen(false)} // 클릭 시 메뉴 닫기
                                            style={{
                                                color: 'inherit',
                                                textDecoration: 'none',
                                                display: 'block',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {subMenu.name}
                                        </Link>
                                    ))}
                                </div>
                            ))}
                        </div>

                        <div style={{ flex: 1 }}/>
                    </div>
                )}
            </div>
        </>
    );
}