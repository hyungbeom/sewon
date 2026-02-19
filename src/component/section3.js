import ExpandingCards from "./ExpandingCards";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

export default function Section3() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [activeTab, setActiveTab] = useState('개막식');

    // 디자인 컬러
    const titleColor = '#254A5E';
    const highlightColor = '#F39C12';
    const textColor = '#FFFFFF';
    const yellowColor = '#FFE822';

    // ==========================================
    // ★ 무대 프로그램 가수 데이터 설정 영역 ★
    // 이 곳의 img 경로를 개별 연예인 사진 경로로 수정해 주시면 됩니다!
    // ==========================================
    const day1Artists = [
        { name: '손빈아', img: '/singer/singer1.png' },   // 손빈아 사진 경로
        { name: '우연이', img: '/singer/singer2.png' },   // 우연이 사진 경로
        { name: '조항조', img: '/singer/singer3.png'  },   // 조항조 사진 경로
        { name: '설하윤', img: '/singer/singer4.png'  }   // 설하윤 사진 경로
    ];

    const day2Artists = [
        { name: '천록담', img: '/singer/singer5.png'  }, // 2일차 가수 1
        { name: '나태주', img: '/singer/singer6.png' }, // 2일차 가수 2
        { name: '박군', img: '/singer/singer7.png'  }, // 2일차 가수 3
    ];

    return (
        <div style={{ width: '100vw' }}>
            {/* 상단 물결 이미지 */}
            {!isMobile && <div style={{ backgroundColor: '#EAEC71' }}>
                <img src="/pc/step1.png" width={'100%'} alt="" style={{ display: 'block' }} />
            </div>}

            {/* 메인 그라데이션 영역 */}
            <div style={{
                marginTop: -5,
                width: '100%',
                background: 'linear-gradient(to bottom, #9FCB39, #6FBA2C)',
                display: 'flex',
                justifyContent: 'center',
                padding: isMobile ? '60px 20px' : '100px 20px',
                boxSizing: 'border-box'
            }}>
                {/* 중앙 컨테이너 */}
                <div style={{
                    width: '100%',
                    maxWidth: 1200,
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? 50 : 100,
                }}>
                    {/* ==========================================
                        [왼쪽] 메뉴 탭 영역
                    ========================================== */}
                    <div style={{ width: isMobile ? '100%' : 200, flexShrink: 0 }}>
                        <div style={{
                            fontSize: isMobile ? 40 : 52,
                            fontWeight: 900,
                            color: titleColor,
                            lineHeight: 1.2,
                            letterSpacing: '-2px'
                        }}>
                            프로그램<br />
                            <span style={{ fontWeight: 300 }}>안내</span>
                        </div>
                        <div style={{ width: 40, height: 3, backgroundColor: highlightColor, margin: '20px 0 30px 0' }} />

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                            {isMobile ? [] : ['개막식', '무대 프로그램'].map((tab) => (
                                <div
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    style={{
                                        fontSize: 24,
                                        fontWeight: activeTab === tab ? 800 : 400,
                                        color: activeTab === tab ? textColor : 'rgba(255,255,255,0.6)',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    {tab}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ==========================================
                        [오른쪽] 콘텐츠 영역
                    ========================================== */}
                    <div style={{ flex: 1 }}>

                        {/* ---------------- 1. 개막식 콘텐츠 ---------------- */}
                        {activeTab === '개막식' && (
                            <div style={{ animation: 'fadeIn 0.5s ease' }}>
                                <div style={{ fontSize: 32, fontWeight: 800, color: titleColor, marginBottom: 30 }}>
                                    개막식 (Opening Ceremony)
                                </div>

                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 15,
                                    color: textColor,
                                    marginBottom: 60,
                                    borderLeft: '2px solid rgba(42, 98, 86, 0.4)',
                                    paddingLeft: 20
                                }}>
                                    {[
                                        { label: '기간', value: '2026. 03. 31. 화요일' },
                                        { label: '시간', value: '18:00 - 19:00' },
                                        { label: '장소', value: '제주시 새별오름 일원' },
                                        { label: '주요내용', value: '제20회 한국후계농업경영인 전국대회의 시작을 알리는 공식 행사로, 식전공연을\n시작으로 개회 선언, 환영 인사 및 개막 퍼포먼스가 진행됩니다.' },
                                        { label: '주최·주관', value: '(사)한국후계농업경영인중앙연합회' },
                                    ].map((item, idx) => (
                                        <div key={idx} style={{ display: 'flex', fontSize: 15 }}>
                                            <div style={{ width: 90, fontWeight: 800, flexShrink: 0, fontSize: 20, paddingTop: 3 }}>{item.label}</div>
                                            <div style={{ flex: 1, whiteSpace: 'pre-line', lineHeight: 1.5, opacity: 0.9, fontSize: 20 }}>{item.value}</div>
                                        </div>
                                    ))}
                                </div>

                                <div style={{ fontSize: 22, fontWeight: 800, color: titleColor, marginBottom: 20 }}>
                                    식전 공연 안내
                                </div>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: isMobile ? 'minmax(0, 1fr)' : 'repeat(3, 1fr)',
                                    gap: 20,
                                }}>
                                    {[
                                        { title: '난타', img: '/info9.png' },
                                        { title: '제주 농요', img: '/info10.png' },
                                        { title: '팝페라', img: '/info11.png' }
                                    ].map((card, idx) => (
                                        <div key={idx} style={{
                                            backgroundColor: 'white',
                                            borderRadius: '16px',
                                            overflow: 'hidden',
                                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                                        }}>
                                            <div style={{
                                                height: 180,
                                                backgroundImage: `url(${card.img})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }} />
                                            <div style={{
                                                padding: '18px 0',
                                                textAlign: 'center',
                                                fontSize: 18,
                                                fontWeight: 800,
                                                color: titleColor
                                            }}>
                                                {card.title}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {!isMobile && (
                                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 15, marginTop: 30 }}>
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: 'pointer', opacity: 0.7 }}>
                                            <polyline points="15 18 9 12 15 6"></polyline>
                                        </svg>
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: 'pointer' }}>
                                            <polyline points="9 18 15 12 9 6"></polyline>
                                        </svg>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* ---------------- 2. 무대 프로그램 콘텐츠 ---------------- */}
                        {activeTab === '무대 프로그램' && (
                            <div style={{ animation: 'fadeIn 0.5s ease', width: '100%' }}>

                                {/* 상단 안내 텍스트 */}
                                <div style={{ textAlign: 'center', marginBottom: isMobile ? 30 : 50 }}>
                                    <div style={{ color: textColor, fontSize: isMobile ? 14 : 32, fontWeight: 700, marginBottom: 8 }}>
                                        제주도를 방문한 회원 및 가족, 관광객을 위한
                                    </div>
                                    <div style={{ color: 'rgba(42, 98, 86, 1)', fontSize: isMobile ? 30 : 52, fontWeight: 900, marginBottom: 15, letterSpacing: '-1.5px' }}>
                                        특별한 프로그램
                                    </div>
                                    <div style={{ color: textColor, fontSize: isMobile ? 14 : 32 }}>
                                        회원과 관광객이 함께하는 <span style={{ color: 'rgba(255, 255, 255, 1)', fontWeight: 800 }}>수준 높은 환영의 밤</span> 진행!!
                                    </div>
                                </div>

                                {/* 스크롤 영역 */}
                                <div style={{ position: 'relative', width: '100%' }}>
                                    <div className="hide-scrollbar" style={{
                                        maxHeight: isMobile ? 450 : 600,
                                        overflowY: 'auto',
                                        paddingBottom: 80,
                                        position: 'relative',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 50
                                    }}>

                                        {/* 타임라인 세로선 */}
                                        {!isMobile && (
                                            <div style={{
                                                position: 'absolute',
                                                left: '73px',
                                                top: '14px',
                                                bottom: '0',
                                                width: '2px',
                                                backgroundColor: 'rgba(255,255,255,0.3)',
                                                zIndex: 1
                                            }} />
                                        )}

                                        {/* --- 1일차 라인 --- */}
                                        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 15 : 30, position: 'relative', zIndex: 2 }}>
                                            <div style={{ width: isMobile ? 'auto' : '84px', display: 'flex', alignItems: 'flex-start', justifyContent: isMobile ? 'flex-start' : 'space-between', gap: 10, flexShrink: 0 }}>
                                                <div style={{ fontSize: 22, fontWeight: 800, color: yellowColor }}>1일차</div>
                                                {!isMobile && <div style={{ width: 14, height: 14, borderRadius: '50%', border: `3px solid ${yellowColor}`, backgroundColor: '#8BC34A', marginTop: 8 }} />}
                                            </div>
                                            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, minmax(0, 1fr))' : 'repeat(4, minmax(0, 1fr))', gap: isMobile ? 15 : 20 }}>
                                                {/* ★ day1Artists 매핑 */}
                                                {day1Artists.map((artist, idx) => (
                                                    <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                                                        <div style={{
                                                            width: '100%',
                                                            aspectRatio: '3/4',
                                                            borderRadius: '16px',
                                                            backgroundImage: `url(${artist.img})`, // 개별 이미지
                                                            backgroundSize: 'cover',
                                                            backgroundPosition: 'center',
                                                            backgroundColor: '#e0e0e0', // 이미지가 없을 때 회색 배경
                                                            boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                                                        }} />
                                                        <div style={{ color: textColor, fontSize: 32, fontWeight: 600 }}>{artist.name}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* --- 2일차 라인 --- */}
                                        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 15 : 30, position: 'relative', zIndex: 2 }}>
                                            <div style={{ width: isMobile ? 'auto' : '84px', display: 'flex', alignItems: 'flex-start', justifyContent: isMobile ? 'flex-start' : 'space-between', gap: 10, flexShrink: 0 }}>
                                                <div style={{ fontSize: 22, fontWeight: 800, color: yellowColor }}>2일차</div>
                                                {!isMobile && <div style={{ width: 14, height: 14, borderRadius: '50%', border: `3px solid ${yellowColor}`, backgroundColor: '#8BC34A', marginTop: 8 }} />}
                                            </div>
                                            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, minmax(0, 1fr))' : 'repeat(4, minmax(0, 1fr))', gap: isMobile ? 15 : 20 }}>
                                                {/* ★ day2Artists 매핑 */}
                                                {day2Artists.map((artist, idx) => (
                                                    <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                                                        <div style={{
                                                            width: '100%',
                                                            aspectRatio: '3/4',
                                                            borderRadius: '16px',
                                                            backgroundImage: `url(${artist.img})`, // 개별 이미지
                                                            backgroundSize: 'cover',
                                                            backgroundPosition: 'center',
                                                            backgroundColor: 'rgba(255,255,255,0.8)',
                                                            boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                                                        }} />
                                                        <div style={{ color: textColor, fontSize: 32, fontWeight: 600 }}>{artist.name}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* 하단 물결 이미지 */}
            {!isMobile && <img src="/pc/step2.png" width={'100%'} alt="" style={{ display: 'block', marginTop: -5 }} />}

            {/* 애니메이션 및 스크롤바 숨김 CSS */}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                /* 미관을 해치는 기본 스크롤바 숨기기 */
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none; /* IE and Edge */
                    scrollbar-width: none; /* Firefox */
                }
            `}</style>
        </div>
    );
}