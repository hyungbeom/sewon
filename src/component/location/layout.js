import { useMediaQuery } from "react-responsive";

export default function Layout() {
    // 768px 이하 모바일 화면 감지
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    // 시안에서 추출한 주요 컬러
    const titleColor = '#245943';   // 타이틀 (짙은 초록)

    return (
        <div style={{
            width: '100%',

            display: 'flex',
            justifyContent: 'center',

            fontFamily: "'Pretendard', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif",
            letterSpacing: '-0.5px',
            boxSizing: 'border-box'
        }}>

            {/* ==========================================
                메인 화이트 캔버스 박스
            ========================================== */}
            <div style={{
                width: '100%',
                maxWidth: 1000,
                backgroundColor: '#FFFFFF',
                borderRadius: isMobile ? '24px' : '32px', // 둥근 모서리
                padding: isMobile ? '30px 20px' : '60px 80px',
                boxSizing: 'border-box',
                boxShadow: '0 10px 40px rgba(0,0,0,0.05)' // 은은한 캔버스 그림자
            }}>

                {/* 1. 타이틀 */}
                <div style={{
                    fontSize: isMobile ? 28 : 36,
                    fontWeight: 900,
                    color: titleColor,
                    marginBottom: isMobile ? 25 : 40
                }}>
                    행사장 배치도
                </div>

                {/* 2. 배치도 지도 이미지 */}
                <div style={{ marginBottom: isMobile ? 30 : 50 }}>
                    {/* ★ PC와 모바일 지도 이미지 비율이 다르다면 각각 경로를 다르게 설정해 주세요 */}
                    <img
                        src={isMobile ? "/info14_mo.png" : "/info14.png"}
                        alt="행사장 배치도"
                        style={{
                            width: '100%',
                            display: 'block',
                            borderRadius: '16px' // 이미지가 딱딱해 보이지 않게 모서리 라운드 처리
                        }}
                    />
                </div>



            </div>
        </div>
    );
}