import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const SAMPLE_CONTENT = `안녕하세요. 한국후계농업경영인중앙연합회 회원입니다.

이번 가을에 진행되는 백제문화체험박물관 행사에 대해 문의드립니다. 가족들과 함께 방문할 예정인데, 어린이백제체험관 프로그램의 구체적인 시간표와 사전 예약이 필요한 체험이 있는지 알고 싶습니다.

또한, 단체 관람 시 할인 혜택이 적용되는지도 확인 부탁드립니다.`;

export default function Notice() {
    // 768px 이하 모바일 화면 감지
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [selectedNotice, setSelectedNotice] = useState(null);

    // 시안에서 추출한 주요 컬러
    const totalColor = '#245943';   // 상단 'Total' 짙은 초록색
    const activeColor = '#72B043';  // 페이지네이션 활성화 연두색
    const borderColor = '#EAEAEA';  // 연한 회색 테두리
    const headerBg = '#F6F6F6';     // PC 테이블 헤더 배경색
    const darkText = '#222222';
    const grayText = '#888888';

    // 게시글 가상 데이터
    const noticeData = [
        { id: 10, title: '2025년 백제문화체험박물관 및 어린이백제체험관 가을행사 안내', date: '2026.02.06', content: SAMPLE_CONTENT },
        { id: 9, title: '2025년 백제문화체험박물관 및 어린이백제체험관 가을행사 안내', date: '2026.02.06', content: SAMPLE_CONTENT },
        { id: 8, title: '2025년 백제문화체험박물관 및 어린이백제체험관 가을행사 안내', date: '2026.02.06', content: SAMPLE_CONTENT },
        { id: 7, title: '2025년 백제문화체험박물관 및 어린이백제체험관 가을행사 안내', date: '2026.02.06', content: SAMPLE_CONTENT },
        { id: 6, title: '2025년 백제문화체험박물관 및 어린이백제체험관 가을행사 안내', date: '2026.02.06', content: SAMPLE_CONTENT },
    ];

    // 공통 페이지 버튼 컴포넌트
    const PageButton = ({ active, children }) => (
        <div style={{
            width: isMobile ? 36 : 40,
            height: isMobile ? 36 : 40,
            borderRadius: '50%',
            backgroundColor: active ? activeColor : '#FFFFFF',
            border: active ? 'none' : `1px solid ${borderColor}`,
            color: active ? '#FFFFFF' : darkText,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: isMobile ? 14 : 15,
            fontWeight: active ? 800 : 500,
            cursor: 'pointer'
        }}>
            {children}
        </div>
    );

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            padding: isMobile ? '40px 0px 80px' : '80px 0px 120px',
            fontFamily: "'Pretendard', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif",
            letterSpacing: '-0.5px'
        }}>

            {/* 공지 상세 모달 */}
            {selectedNotice && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                        padding: 20
                    }}
                    onClick={() => setSelectedNotice(null)}
                >
                    <div
                        style={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: 12,
                            maxWidth: isMobile ? 560 : 720,
                            width: '100%',
                            maxHeight: '90vh',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.15)'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* 제목 영역 */}
                        <div style={{ padding: '28px 28px 0' }}>
                            <div style={{
                                fontSize: 18,
                                fontWeight: 700,
                                color: '#111111',
                                lineHeight: 1.4,
                                marginBottom: 12
                            }}>
                                {selectedNotice.title}
                            </div>
                            <div style={{
                                fontSize: 14,
                                fontWeight: 400,
                                color: '#111111',
                                textAlign: 'right'
                            }}>
                                {selectedNotice.date}
                            </div>
                        </div>

                        {/* 본문 영역 (스크롤 가능) */}
                        <div style={{
                            flex: 1,
                            overflowY: 'auto',
                            padding: '20px 28px',
                            fontSize: 15,
                            lineHeight: 1.7,
                            color: '#111111',
                            whiteSpace: 'pre-wrap'
                        }}>
                            {selectedNotice.content}
                        </div>

                        {/* 닫기 버튼 */}
                        <div style={{
                            padding: '24px 28px 28px',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <button
                                onClick={() => setSelectedNotice(null)}
                                style={{
                                    width: '100%',
                                    maxWidth: 200,
                                    padding: '14px 24px',
                                    backgroundColor: '#E8E8E8',
                                    border: 'none',
                                    borderRadius: 8,
                                    fontSize: 15,
                                    fontWeight: 500,
                                    color: '#111111',
                                    cursor: 'pointer'
                                }}
                            >
                                닫기
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* 메인 컨테이너 (최대 너비 1000px 고정) */}
            <div style={{ width: '100%', maxWidth: 1000 }}>

                {/* 1. 상단 Total 카운트 영역 */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginBottom: 15,
                    fontSize: 15,
                    fontWeight: 800
                }}>
                    <span style={{ color: totalColor }}>Total</span>
                    <span style={{ color: grayText, margin: '0 8px' }}>·</span>
                    <span style={{ color: grayText, fontWeight: 500 }}>16</span>
                </div>

                {/* 2. 게시판 목록 영역 */}
                <div >

                    {/* PC 전용 헤더 (모바일에서는 숨김) */}
                    {!isMobile && (
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: headerBg,
                            padding: '18px 0',
                            borderBottom: `1px solid ${borderColor}`,
                            fontWeight: 800,
                            color: darkText,
                            fontSize: 16
                        }}>
                            <div style={{ width: '10%', textAlign: 'center' }}>순번</div>
                            <div style={{ width: 1, height: 14, backgroundColor: '#DDDDDD' }} />
                            <div style={{ flex: 1, textAlign: 'center' }}>제목</div>
                            <div style={{ width: 1, height: 14, backgroundColor: '#DDDDDD' }} />
                            <div style={{ width: '15%', textAlign: 'center' }}>등록일</div>
                        </div>
                    )}

                    {/* 게시글 리스트 반복문 */}
                    {noticeData.map((item, idx) => (
                        <div key={idx}>
                            {/* PC 뷰: 가로형 표 레이아웃 */}
                            {!isMobile ? (
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '20px 0',
                                    borderBottom: `1px solid ${borderColor}`,
                                    cursor: 'pointer',
                                    transition: 'background 0.2s',
                                }}
                                     onClick={() => setSelectedNotice(item)}
                                     onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FAFAFA'}
                                     onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                >
                                    <div style={{ width: '10%', textAlign: 'center', color: grayText }}>{item.id}</div>
                                    <div style={{ width: 1, height: 14, backgroundColor: '#EEEEEE' }} />
                                    <div style={{ flex: 1, paddingLeft: 40, color: darkText, fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                        {item.title}
                                    </div>
                                    <div style={{ width: 1, height: 14, backgroundColor: '#EEEEEE' }} />
                                    <div style={{ width: '15%', textAlign: 'center', color: grayText }}>{item.date}</div>
                                </div>
                            ) : (
                                /* 모바일 뷰: 세로형 블록 레이아웃 */
                                <div style={{
                                    padding: '20px 0',
                                    borderBottom: `1px solid ${borderColor}`,
                                    cursor: 'pointer'
                                }}
                                     onClick={() => setSelectedNotice(item)}>
                                    {/* 상단: 번호 및 등록일 */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: grayText, fontSize: 14 }}>
                                            <span>{item.id}</span>
                                            <div style={{ width: 1, height: 12, backgroundColor: '#DDDDDD' }} />
                                        </div>
                                        <div style={{ color: grayText, fontSize: 14 }}>{item.date}</div>
                                    </div>
                                    {/* 하단: 제목 */}
                                    <div style={{ fontSize: 16, fontWeight: 600, color: darkText, lineHeight: 1.5, wordBreak: 'keep-all' }}>
                                        {item.title}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* 3. 하단 페이지네이션 (번호 이동) */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: isMobile ? 8 : 12,
                    marginTop: isMobile ? 40 : 60
                }}>
                    <PageButton>&lt;</PageButton>
                    <PageButton active>1</PageButton>
                    <PageButton>2</PageButton>
                    <PageButton>3</PageButton>
                    <div style={{ color: grayText, fontSize: 14, margin: '0 4px' }}>...</div>
                    <PageButton>10</PageButton>
                    <PageButton>&gt;</PageButton>
                </div>

            </div>
        </div>
    );
}