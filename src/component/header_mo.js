import { useState } from "react";

export default function Header() {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    const menuData = [
        {
            title: '행사 안내',
            subMenus: [
                <span key="1">한국후계농업 <br/> 경영인이란?</span>,
                '행사 개요', '행사 일정 안내', '지역 관광 안내'
            ]
        },
        {
            title: '프로그램 안내',
            subMenus: ['개막식', '무대 프로그램', '부대 프로그램', '트레킹 프로그램', '먹거리 프로그램']
        },
        {
            title: '오시는 길',
            subMenus: ['행사장 위치', '행사장 배치도', '주차 안내', '대중교통 안내']
        },
        {
            title: '게시판',
            subMenus: ['공지사항', '자주하는 질문', 'Q&A']
        }
    ];

    return (
        <>
            {/* ★ 추가된 부분: 메뉴가 열리면 화면 전체를 덮는 어둡고 흐린 오버레이 막 */}
            {isMenuOpen && (
                <div
                    style={{
                        position: 'fixed', // 스크롤을 내려도 항상 화면 전체를 덮도록 고정
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.4)', // 40% 투명도의 검은색 (어둡게)
                        backdropFilter: 'blur(1px)',           // 뒷배경 블러 처리 (흐리게)
                        zIndex: 90, // 뒷배경보다는 위(90), 헤더 메뉴(100)보다는 아래에 배치
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
                    zIndex: 100 // 오버레이(90)보다 무조건 높아야 메뉴가 선명하게 보입니다.
                }}
                onMouseLeave={() => {
                    setIsMenuOpen(false);
                    setActiveIndex(null);
                }}
            >
                {/* 1. 상단 메인 메뉴 영역 */}
                <div style={{
                    background: isMenuOpen ? '#0C2E5E' : 'none',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px 0px',
                    width: '100%',
                    color: 'white',
                    transition: 'background 0.3s'
                }}>
                    <div style={{ flex: 1, textAlign: 'left', paddingLeft: 40 }}>
                        <a href="/"> <img src="/left_logo.svg" width={250} alt=""/></a>
                    </div>

                    <div
                        style={{
                            flex: 1,
                            textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            fontSize: 18,
                            fontWeight: 500,
                            cursor: 'pointer'
                        }}
                        onMouseEnter={() => setIsMenuOpen(true)}
                    >
                        {menuData.map((menu, index) => (
                            <div
                                key={index}
                                style={{
                                    width: 180,
                                    color: activeIndex === index ? '#F2C94C' : 'white',
                                    transition: 'color 0.2s'
                                }}
                                onMouseEnter={() => setActiveIndex(index)}
                            >
                                {menu.title}
                            </div>
                        ))}
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
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease-in-out'
                                    }}
                                    onMouseEnter={() => setActiveIndex(index)}
                                >
                                    {menu.subMenus.map((subMenuText, subIndex) => (
                                        <div key={subIndex}>
                                            {subMenuText}
                                        </div>
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