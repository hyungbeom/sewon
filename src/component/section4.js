import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function Section4() {
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    // 현재 선택된 탭 상태 관리 (기본값: 공지사항)
    const [activeTab, setActiveTab] = useState('공지사항');
    const tabs = ['공지사항', '자주하는 질문', 'Q&A'];

    // 각 탭별로 보여줄 데이터
    const boardData = {
        '공지사항': [
            // { id: 1, title: '2025년 백제문화체험박물관 및 어린이백제체험관 가을행사 안내', date: '2026.02.06' },
            // { id: 2, title: '2025 어린이백제체험관 어린이날 행사 안내', date: '2026.02.06' },
            // { id: 3, title: '2025년 하절기 운영 안내', date: '2026.02.06' },
            // { id: 4, title: '어린이백제체험관 성탄절 행사 "백제꼬마의 크리스마스" 안내', date: '2026.02.06' },
        ],
        '자주하는 질문': [
            // { id: 1, title: '행사장 주차는 무료인가요?', date: '2026.02.05' },
            // { id: 2, title: '우천 시 행사는 정상적으로 진행되나요?', date: '2026.02.04' },
            // { id: 3, title: '행사장 내에 식당이나 매점이 있나요?', date: '2026.02.03' },
            // { id: 4, title: '유모차나 휠체어 대여가 가능한가요?', date: '2026.02.02' },
        ],
        'Q&A': [
            // { id: 1, title: '단체 관람 예약 문의드립니다.', date: '2026.02.06' },
            // { id: 2, title: '농특산물 판매 부스 참여 신청 방법이 궁금합니다.', date: '2026.02.05' },
            // { id: 3, title: '자원봉사자 모집 일정은 언제인가요?', date: '2026.02.01' },
            // { id: 4, title: '개막식 공연 좌석은 선착순인가요?', date: '2026.01.28' },
        ]
    };

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>

            <div style={{
                width: '100vw',
                padding: isMobile ? '80px 20px' : '200px 200px 0px 200px',
                boxSizing: 'border-box',
                overflow: 'hidden' // 만약을 대비해 바깥 영역에서도 한 번 더 잘라줌
            }}>

                {/* ---------------- 상단 타이틀 및 탭 메뉴 영역 ---------------- */}
                <div style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: 'space-between',
                    alignItems: isMobile ? 'flex-start' : 'flex-end',
                    marginBottom: 30,
                    gap: isMobile ? 20 : 0
                }}>
                    <div style={{ fontSize: isMobile ? 36 : 46, fontWeight: 900, color: '#2F4F42', letterSpacing: '-1px' }}>
                        알려드립니다
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 15, fontSize: isMobile ? 15 : 17 }}>
                        {tabs.map((tab, idx) => (
                            <div key={tab} style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                                <span
                                    onClick={() => setActiveTab(tab)}
                                    style={{
                                        cursor: 'pointer',
                                        fontWeight: activeTab === tab ? 800 : 400,
                                        color: activeTab === tab ? '#111' : '#888',
                                        transition: 'color 0.2s'
                                    }}
                                >
                                    {tab}
                                </span>
                                {idx < tabs.length - 1 && <span style={{ color: '#ccc' }}>·</span>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ---------------- 게시판 리스트 영역 ---------------- */}
                <div style={{ borderTop: '2px solid #eaeaea' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                        width: '100%' // 그리드가 화면을 넘어가지 않게 고정
                    }}>
                        {boardData[activeTab].map((item, index) => (
                            <div key={item.id} style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: isMobile ? '20px 0' : '30px 40px',
                                borderBottom: '1px solid #eaeaea',
                                borderRight: (!isMobile && index % 2 === 0) ? '1px solid #eaeaea' : 'none',
                                width: '100%',
                                boxSizing: 'border-box'
                            }}>
                                {/* 글 제목 */}
                                <div style={{
                                    flex: 1,               // ★ 추가: 남은 공간 꽉 채우기
                                    minWidth: 0,           // ★ 핵심 마법: flex 환경에서 말줄임(...)이 작동하도록 강제함
                                    fontSize: 16,
                                    color: '#333',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    paddingRight: 20
                                }}>
                                    {item.title}
                                </div>
                                {/* 날짜 */}
                                <div style={{ fontSize: 15, color: '#999', flexShrink: 0 }}>
                                    {item.date}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ---------------- 하단 더 보러가기 버튼 ---------------- */}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
                    <div
                        onClick={() => navigate('/board/notice')}
                        style={{
                        backgroundColor: '#1E2B4D',
                        color: 'white',
                        padding: '16px 36px',
                        borderRadius: 30,
                        fontSize: 16,
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        boxShadow: '0 4px 10px rgba(30, 43, 77, 0.2)'
                    }}>
                        더 보러가기
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </div>
                </div>

            </div>
        </div>
    );
}