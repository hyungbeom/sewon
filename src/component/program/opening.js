import { useMediaQuery } from "react-responsive";

export default function Opening() {
    // 768px 이하 모바일 화면 감지
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    // 주요 컬러
    const titleColor = '#245943';
    const grayBg = '#F6F6F6';
    const darkText = '#111111';
    const grayText = '#444444';

    // 행사 정보 데이터
    const infoData = [
        { label: '기간', value: '2026. 03. 31. 화요일' },
        { label: '시간', value: '18:00 - 19:00' },
        { label: '장소', value: '제주시 새별오름 일원' },
        { label: '주요내용', value: '제20회 한국후계농업경영인 전국대회의 시작을 알리는 공식 행사로, 식전공연을\n시작으로 개회 선언, 환영 인사 및 개막 퍼포먼스가 진행됩니다.' },
        { label: '주최·주관', value: '(사)한국후계농업경영인중앙연합회' }
    ];

    // 카드 데이터 (실제 이미지 경로로 수정해 주세요)
    const cardData = [
        { title: '난타', img: '/info9.png' },
        { title: '제주 농요', img: '/info10.png' },
        { title: '팝페라', img: '/info11.png' }
    ];

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: isMobile ? '40px 0px 80px' : '80px 20px 120px',
            fontFamily: "'Pretendard', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif",
            letterSpacing: '-0.5px'
        }}>

            {/* ★ 핵심 수정: PC는 전체를 회색으로 감싸고, 모바일은 투명하게 풀어줍니다. */}
            <div style={{
                width: '100%',
                maxWidth: 1000,
                backgroundColor: isMobile ? 'transparent' : grayBg, // PC일 때만 전체 회색 배경
                borderRadius: isMobile ? 0 : '24px',
                padding: isMobile ? 0 : '60px 80px',
                boxSizing: 'border-box'
            }}>

                {/* ==========================================
                    [상단] 개막식 정보 영역
                ========================================== */}
                <div style={{
                    // ★ 핵심 수정: 모바일일 때는 이 상단 박스만 회색으로 감싸줍니다.
                    backgroundColor: isMobile ? grayBg : 'transparent',
                    borderRadius: isMobile ? '24px' : 0,
                    padding: isMobile ? '30px 20px' : 0,
                    marginBottom: isMobile ? '40px' : '60px'
                }}>

                    {/* 타이틀 */}
                    <div style={{
                        fontSize: isMobile ? 26 : 32,
                        fontWeight: 900,
                        color: titleColor,
                        marginBottom: isMobile ? 25 : 35,
                        lineHeight: 1.3
                    }}>
                        개막식 <br style={{ display: isMobile ? 'block' : 'none' }} />
                        (Opening Ceremony)
                    </div>

                    {/* 정보 리스트 */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: isMobile ? 15 : 20,
                        borderLeft: isMobile ? 'none' : `2px solid ${titleColor}`,
                        paddingLeft: isMobile ? 0 : 25
                    }}>
                        {infoData.map((item, idx) => {
                            const isColumnMobile = isMobile && (item.label === '주요내용' || item.label === '주최·주관');

                            return (
                                <div key={idx} style={{
                                    display: 'flex',
                                    flexDirection: isColumnMobile ? 'column' : 'row',
                                    gap: isColumnMobile ? 8 : 20,
                                    alignItems: isColumnMobile ? 'flex-start' : 'flex-start'
                                }}>
                                    <div style={{
                                        width: isColumnMobile ? '100%' : 75,
                                        fontWeight: 800,
                                        color: darkText,
                                        flexShrink: 0,
                                        fontSize: isMobile ? 15 : 16
                                    }}>
                                        {item.label}
                                    </div>
                                    <div style={{
                                        flex: 1,
                                        color: grayText,
                                        lineHeight: 1.6,
                                        fontWeight: 500,
                                        fontSize: isMobile ? 14 : 16,
                                        whiteSpace: 'pre-line', // 배열에 넣은 \n 줄바꿈이 화면에 적용되도록 하는 마법의 속성
                                        wordBreak: 'keep-all'
                                    }}>
                                        {item.value}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ==========================================
                    [하단] 식전 공연 안내 영역
                ========================================== */}
                <div>
                    <div style={{
                        fontSize: isMobile ? 22 : 26,
                        fontWeight: 800,
                        color: titleColor,
                        marginBottom: isMobile ? 20 : 30
                    }}>
                        식전 공연 안내
                    </div>

                    {/* 카드 그리드 */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? 'minmax(0, 1fr)' : 'repeat(3, minmax(0, 1fr))',
                        gap: isMobile ? 20 : 30
                    }}>
                        {cardData.map((card, idx) => (
                            <div key={idx} style={{
                                backgroundColor: 'white',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.06)'
                            }}>
                                {/* 카드 이미지 */}
                                <div style={{
                                    width: '100%',
                                    height: isMobile ? 220 : 200,
                                    backgroundImage: `url(${card.img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }} />
                                {/* 카드 텍스트 */}
                                <div style={{
                                    padding: isMobile ? '16px 0' : '20px 0',
                                    textAlign: 'center',
                                    fontSize: isMobile ? 18 : 20,
                                    fontWeight: 800,
                                    color: darkText
                                }}>
                                    {card.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}