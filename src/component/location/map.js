import { useMediaQuery } from "react-responsive";

export default function Map() {
    // 768px 이하 모바일 화면 감지
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    // 시안에서 추출한 주요 컬러
    const bgColor = '#EFF5B8'; // 전체 배경 연한 노란색/연두색
    const titleColor = '#245943'; // 타이틀 짙은 초록색
    const whiteBoxColor = '#FFFFFF'; // 하단 주소 박스 배경
    const darkText = '#111111';
    const grayText = '#555555';

    return (
        <div style={{
            width: '100%',
            backgroundColor: bgColor, // 전체 페이지 배경색 적용
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: isMobile ? '40px 0px 80px' : '80px 0px 100px',
            fontFamily: "'Pretendard', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif",
            letterSpacing: '-0.5px',
            boxSizing: 'border-box',
            borderRadius: '24px',
        }}>

            {/* 메인 컨테이너 (최대 너비 고정) */}
            <div style={{ width: '100%', maxWidth: 1000 }}>

                {/* ==========================================
                    1. 첫 번째 지도 (제주도 전체 지도) 영역
                ========================================== */}
                <div style={{ marginBottom: isMobile ? 30 : 60 }}>

                    {/* PC에서만 타이틀 표시 */}
                    {!isMobile && (
                        <div style={{
                            fontSize: 32,
                            fontWeight: 900,
                            color: titleColor,
                            marginBottom: 40
                        }}>
                            행사장 위치
                        </div>
                    )}

                    {/* 지도 이미지 */}
                    <img
                        src="/map.png" // ★ 실제 제주도 전체 지도 이미지 경로로 변경
                        alt="제주도 행사장 위치 안내"
                        style={{
                            width: '100%',
                            display: 'block',
                            // 모바일에서는 이미지가 너무 길어지지 않게 최대 너비 설정
                            maxWidth: isMobile ? 500 : 'none',
                            margin: '0 auto'
                        }}
                    />
                </div>

                {/* ==========================================
                    2. 중앙 점(Dot) 구분선 영역
                ========================================== */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 15,
                    marginBottom: isMobile ? 30 : 60
                }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: 'white' }} />
                    <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: 'white' }} />
                    <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: 'white' }} />
                </div>

                {/* ==========================================
                    3. 두 번째 지도 (세부 위치) 영역
                ========================================== */}
                <div style={{ marginBottom: isMobile ? 30 : 40 }}>

                    {/* PC에서만 타이틀 표시 */}
                    {!isMobile && (
                        <div style={{
                            fontSize: 32,
                            fontWeight: 900,
                            color: titleColor,
                            marginBottom: 40
                        }}>
                            행사장 세부 위치
                        </div>
                    )}

                    {/* 세부 지도 이미지 */}
                    <img
                        src="/info13.png" // ★ 실제 세부 지도 이미지 경로로 변경
                        alt="행사장 세부 위치 지도"
                        style={{
                            width: '100%',
                            display: 'block',
                            borderRadius: '16px', // 시안처럼 모서리 둥글게
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)' // 은은한 그림자
                        }}
                    />
                </div>

                {/* ==========================================
                    4. 하단 텍스트 주소 박스
                ========================================== */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{
                        backgroundColor: whiteBoxColor,
                        borderRadius: '16px',
                        padding: isMobile ? '20px 30px' : '30px 60px',
                        textAlign: 'center',
                        boxShadow: '0 5px 20px rgba(0,0,0,0.03)' // 살짝 떠있는 듯한 효과
                    }}>
                        <div style={{
                            fontSize: isMobile ? 16 : 18,
                            fontWeight: 900,
                            color: titleColor,
                            marginBottom: 8
                        }}>
                            제주특별자치도 제주시 새별오름 일원
                        </div>
                        <div style={{
                            fontSize: isMobile ? 14 : 16,
                            color: grayText,
                            fontWeight: 500
                        }}>
                            제주 제주시 애월읍 봉성리 산59-8
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}