import { useMediaQuery } from "react-responsive";

export default function Stage() {
    // 768px 이하 모바일 화면 감지
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    // 시안에서 추출한 주요 컬러
    const innerBgColor = '#1F3A68'; // 안쪽 카드 영역 네이비
    const yellowColor = '#F9C021';  // 포인트 쨍한 노란색
    const whiteText = '#FFFFFF';
    const textColor = '#FFFFFF';
    // 가수 데이터 (실제 이미지 경로로 수정해 주세요)
    const day1Artists = [
        { name: '손빈아', img: '/singer/singer1.png' },   // 손빈아 사진 경로
        { name: '우연이', img: '/singer/singer2.png' },   // 우연이 사진 경로
        { name: '조항조', img: '/singer/singer3.png'  },   // 조항조 사진 경로
        { name: '설하윤', img: '/singer/singer4.png'  }   // 설하윤 사진 경로
    ];

    const day2Artists = [
        { name: '천록담', img: '/singer/singer5.png'  }, // 2일차 가수 1
        { name: '태군 노래자랑', img: '/singer/singer6.png' }, // 2일차 가수 2
    ];

    return (
        <div style={{
            width: '100%',

            display: 'flex',
            justifyContent: 'center',
            padding: isMobile ? '40px 0px 80px' : '80px 0px 120px',

            letterSpacing: '-0.5px',
            boxSizing: 'border-box'
        }}>

            {/* 메인 이너 컨테이너 (밝은 네이비 박스) */}
            <div style={{
                width: '100%',
                maxWidth: 1200,
                backgroundColor: innerBgColor,
                borderRadius: isMobile ? '16px' : '24px',
                padding: isMobile ? '40px 20px' : '60px 80px',
                boxSizing: 'border-box'
            }}>


                {/* ==========================================
                    2. 타임라인 & 카드 영역 (PC/모바일 분기)
                ========================================== */}
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: isMobile ? 40 : 60 }}>

                    {/* 타임라인 세로선 */}
                    {!isMobile && (
                        <div style={{
                            position: 'absolute',
                            left: '134px',
                            top: '20px',
                            bottom: '0',
                            width: '2px',
                            backgroundColor: 'rgba(255,255,255,0.3)',
                            zIndex: 1
                        }} />
                    )}


                    {/* --- 1일차 라인 --- */}
                    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 15 : 30, position: 'relative', zIndex: 2 }}>
                        <div style={{ width: isMobile ? 'auto' : 150, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8, flexShrink: 0 }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: isMobile ? 'flex-start' : 'space-between', gap: 10, width: '100%' }}>
                                <div style={{ fontSize: 40, fontWeight: 800, color: yellowColor }}>1일차</div>
                                {!isMobile && <div style={{ width: 9, height: 9, borderRadius: '50%', border: `11px solid ${yellowColor}`, backgroundColor: '#8BC34A', marginTop: 8, flexShrink: 0 }} />}
                            </div>
                            <div style={{ color: textColor, fontSize: 21, fontWeight: 600, lineHeight: 1.4 }}>
                                <div>20:00~</div>
                                <div>22:00</div>
                            </div>
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

                                        boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                                    }} />
                                    <div style={{ color: textColor, fontSize: 25, fontWeight: 400 }}>{artist.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* --- [2일차] --- */}

                    {/* --- 2일차 라인 --- */}
                    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 15 : 30, position: 'relative', zIndex: 2, marginTop : 100 }}>
                        <div style={{ width: isMobile ? 'auto' : 150, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8, flexShrink: 0 }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: isMobile ? 'flex-start' : 'space-between', gap: 10, width: '100%' }}>
                                <div style={{ fontSize: 40, fontWeight: 800, color: yellowColor }}>2일차</div>
                                {!isMobile && <div style={{ width: 9, height: 9, borderRadius: '50%', border: `11px solid ${yellowColor}`, backgroundColor: '#8BC34A', marginTop: 8, flexShrink: 0 }} />}
                            </div>
                            <div style={{ color: textColor, fontSize: 24, fontWeight: 600, lineHeight: 1.4 }}>
                                <div>13:00~</div>
                                <div>17:00</div>
                            </div>
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

                                        boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                                    }} />
                                    <div style={{ color: textColor, fontSize: 25, fontWeight: 400 }}>{artist.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}