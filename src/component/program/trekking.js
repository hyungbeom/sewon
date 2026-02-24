import { useMediaQuery } from "react-responsive";

export default function Trekking() {
    // 768px 이하 모바일 화면 감지
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    // 시안에서 추출한 주요 컬러
    const titleColor = '#245943'; // 짙은 청록색 (타이틀, 주요 텍스트)
    const grayBg = '#F7F8F9';     // 상단 박스 연한 회색 배경
    const borderColor = '#E0E0E0'; // 구분선 색상
    const darkText = '#111111';
    const grayText = '#444444';

    // 프로그램 정보 데이터
    const infoData = [
        { label: '일정', value: '2026년 4월 1일(수)' },
        { label: '시간', value: '10:00 ~ 17:00(상시 운영)' },
        { label: '코스', value: '새별오름 트레킹 1.4KM' },
        { label: '소요시간', value: '약 40분 소요' }
    ];

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            padding: isMobile ? '40px 0px 80px' : '80px 0px 120px',

            letterSpacing: '-0.5px'
        }}>

            {/* 전체 메인 컨테이너 (최대 너비 1000px로 제한하여 보기 좋게 유지) */}
            <div style={{ width: '100%', maxWidth: 1000 }}>

                {/* ==========================================
                    1. 메인 타이틀
                ========================================== */}
                <div style={{
                    fontSize: isMobile ? 26 : 32,
                    fontWeight: 900,
                    color: titleColor,
                    marginBottom: isMobile ? 20 : 30
                }}>
                    트레킹 프로그램
                </div>

                {/* ==========================================
                    2. 상단 안내 박스 (회색 배경)
                ========================================== */}
                <div style={{
                    backgroundColor: grayBg,
                    borderRadius: '24px',
                    padding: isMobile ? '30px 20px' : '40px 60px',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: isMobile ? 'stretch' : 'center',
                    gap: isMobile ? 25 : 50,
                    marginBottom: isMobile ? 20 : 30
                }}>
                    {/* 좌측(모바일은 상단) 타이틀 영역 */}
                    <div style={{
                        flex: 1,
                        display: 'flex',
                        // ★ 핵심: 모바일과 PC의 글씨 위아래 순서가 다름을 반영
                        flexDirection: isMobile ? 'column-reverse' : 'column',
                        justifyContent: 'center',
                        gap: 10
                    }}>
                        <div style={{ color: grayText, fontSize: 15, fontWeight: 500 }}>
                            코스 내 숨겨진 보물(쪽지)을 찾아라!!
                        </div>
                        <div style={{ color: titleColor, fontSize: isMobile ? 20 : 22, fontWeight: 900 }}>
                            오프라인 보물찾기 이벤트
                        </div>
                    </div>

                    {/* 중앙 구분선 (PC: 세로 / 모바일: 가로) */}
                    <div style={{
                        width: isMobile ? '100%' : 1,
                        height: isMobile ? 1 : 120, // PC일 때 세로선 높이 확보
                        backgroundColor: borderColor
                    }} />

                    {/* 우측(모바일은 하단) 정보 리스트 영역 */}
                    <div style={{ flex: 1.2, display: 'flex', flexDirection: 'column', gap: 15, justifyContent: 'center' }}>
                        {infoData.map((item, idx) => (
                            <div key={idx} style={{ display: 'flex', gap: 20, fontSize: isMobile ? 15 : 16 }}>
                                <div style={{ width: 60, fontWeight: 900, color: titleColor }}>{item.label}</div>
                                <div style={{ flex: 1, color: darkText, fontWeight: 500 }}>{item.value}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ==========================================
                    3. 하단 지도 이미지 영역
                ========================================== */}
                <div style={{
                    width: '100%',
                    backgroundColor: '#EBEBEB', // 시안의 지도 바깥쪽 회색 배경
                    borderRadius: '24px',
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <img
                        src={isMobile ? "/info12_mo.png" : "/info12.png"} // ★ 실제 지도 이미지 경로로 변경해 주세요!
                        alt="새별오름 트레킹 코스 및 보물찾기 지도"
                        style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block'
                        }}
                    />
                </div>

            </div>
        </div>
    );
}