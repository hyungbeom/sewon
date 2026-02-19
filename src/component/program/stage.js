import { useMediaQuery } from "react-responsive";

export default function Stage() {
    // 768px 이하 모바일 화면 감지
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    // 시안에서 추출한 주요 컬러
    const innerBgColor = '#1F3A68'; // 안쪽 카드 영역 네이비
    const yellowColor = '#F9C021';  // 포인트 쨍한 노란색
    const whiteText = '#FFFFFF';

    // 가수 데이터 (실제 이미지 경로로 수정해 주세요)
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
        <div style={{
            width: '100%',

            display: 'flex',
            justifyContent: 'center',
            padding: isMobile ? '40px 0px 80px' : '80px 0px 120px',
            fontFamily: "'Pretendard', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif",
            letterSpacing: '-0.5px',
            boxSizing: 'border-box'
        }}>

            {/* 메인 이너 컨테이너 (밝은 네이비 박스) */}
            <div style={{
                width: '100%',
                maxWidth: 1000,
                backgroundColor: innerBgColor,
                borderRadius: isMobile ? '16px' : '24px',
                padding: isMobile ? '40px 20px' : '60px 80px',
                boxSizing: 'border-box'
            }}>

                {/* ==========================================
                    1. 상단 타이틀 영역
                ========================================== */}
                <div style={{ textAlign: 'center', color: whiteText, marginBottom: isMobile ? 40 : 60 }}>
                    <div style={{ fontSize: isMobile ? 14 : 32, fontWeight: 500, marginBottom: 10, opacity: 0.9 }}>
                        제주도를 방문한 회원 및 가족, 관광객을 위한
                    </div>
                    <div style={{ fontSize: isMobile ? 32 : 38, fontWeight: 900, color: yellowColor, marginBottom: 15, letterSpacing: '-1px' }}>
                        특별한 프로그램
                    </div>
                    <div style={{ fontSize: isMobile ? 14 : 16, opacity: 0.9 }}>
                        회원과 관광객이 함께하는 <span style={{ fontWeight: 800, color: whiteText, opacity: 1 }}>수준 높은 환영의 밤</span> 진행!!
                    </div>
                </div>

                {/* ==========================================
                    2. 타임라인 & 카드 영역 (PC/모바일 분기)
                ========================================== */}
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: isMobile ? 40 : 60 }}>

                    {/* ★ PC 버전 전용: 좌측 세로선 (|) */}
                    {!isMobile && (
                        <div style={{
                            position: 'absolute',
                            left: 77, // 동그라미 한가운데를 관통하도록 수치 조정
                            top: 15,
                            bottom: 50,
                            width: 2,
                            backgroundColor: 'rgba(255,255,255,0.2)'
                        }} />
                    )}

                    {/* --- [1일차] --- */}
                    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 20 : 40, position: 'relative' }}>

                        {/* 1일차 라벨 (PC는 동그라미, 모바일은 가로선) */}
                        <div style={{
                            width: isMobile ? '100%' : 90,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: isMobile ? 'flex-start' : 'space-between',
                            gap: 15,
                            flexShrink: 0
                        }}>
                            <span style={{ fontSize: 24, fontWeight: 900, color: yellowColor }}>1일차</span>
                            {!isMobile ? (
                                // PC: 노란색 테두리의 동그라미
                                <div style={{ width: 14, height: 14, borderRadius: '50%', border: `3px solid ${yellowColor}`, backgroundColor: innerBgColor, zIndex: 1 }} />
                            ) : (
                                // 모바일: 가로선
                                <div style={{ flex: 1, height: 1, backgroundColor: 'rgba(255,255,255,0.2)' }} />
                            )}
                        </div>

                        {/* 1일차 카드 그리드 */}
                        <div style={{
                            flex: 1,
                            display: 'grid',
                            // PC는 4칸, 모바일은 2칸 고정
                            gridTemplateColumns: isMobile ? 'repeat(2, minmax(0, 1fr))' : 'repeat(4, minmax(0, 1fr))',
                            gap: isMobile ? 15 : 20
                        }}>
                            {day1Artists.map((artist, idx) => (
                                <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                                    <div style={{
                                        width: '100%',
                                        aspectRatio: '3/4', // 3:4 세로형 비율 고정
                                        borderRadius: '16px',
                                        backgroundImage: `url(${artist.img})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundColor: '#EAEAEA'
                                    }} />
                                    <div style={{ color: whiteText, fontSize: 16, fontWeight: 600 }}>{artist.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* --- [2일차] --- */}
                    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 20 : 40, position: 'relative' }}>

                        {/* 2일차 라벨 */}
                        <div style={{
                            width: isMobile ? '100%' : 90,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: isMobile ? 'flex-start' : 'space-between',
                            gap: 15,
                            flexShrink: 0
                        }}>
                            <span style={{ fontSize: 24, fontWeight: 900, color: yellowColor }}>2일차</span>
                            {!isMobile ? (
                                <div style={{ width: 14, height: 14, borderRadius: '50%', border: `3px solid ${yellowColor}`, backgroundColor: innerBgColor, zIndex: 1 }} />
                            ) : (
                                <div style={{ flex: 1, height: 1, backgroundColor: 'rgba(255,255,255,0.2)' }} />
                            )}
                        </div>

                        {/* 2일차 카드 그리드 */}
                        <div style={{
                            flex: 1,
                            display: 'grid',
                            // PC는 4칸, 모바일은 2칸 고정
                            gridTemplateColumns: isMobile ? 'repeat(2, minmax(0, 1fr))' : 'repeat(4, minmax(0, 1fr))',
                            gap: isMobile ? 15 : 20
                        }}>
                            {day2Artists.map((artist, idx) => {
                                // ★ 핵심 디테일: 모바일이면서 첫 번째 카드('천록담')일 때만 가로로 넓게 2칸을 차지합니다!
                                const isWideMobileCard = isMobile && idx === 0;

                                return (
                                    <div key={idx} style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: 12,
                                        // 모바일 첫 카드는 1열부터 끝(2칸)까지 병합
                                        gridColumn: isWideMobileCard ? '1 / span 2' : 'auto'
                                    }}>
                                        <div style={{
                                            width: '100%',
                                            // 가로형일 땐 2:1 와이드 비율, 세로형일 땐 3:4 인물 비율
                                            aspectRatio: isWideMobileCard ? '2/1' : '3/4',
                                            borderRadius: '16px',
                                            backgroundImage: `url(${artist.img})`,
                                            backgroundSize: 'cover',
                                            // 가로로 넓어질 때는 상단이 덜 잘리도록 포지션 조정
                                            backgroundPosition: isWideMobileCard ? 'center top' : 'center',
                                            backgroundColor: '#EAEAEA'
                                        }} />
                                        <div style={{ color: whiteText, fontSize: 16, fontWeight: 600 }}>{artist.name}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}