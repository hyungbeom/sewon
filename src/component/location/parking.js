import { useMediaQuery } from "react-responsive";

export default function Parking() {
    // 768px 이하 모바일 화면 감지
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    // 시안에서 추출한 주요 컬러
    const titleColor = '#245943';   // 상단 타이틀 짙은 초록색
    const qrBgColor = '#547A6A';    // 하단 QR 영역 배경색
    const qrTextColor = '#50A861';  // 하단 QR 설명 연두색 텍스트
    const darkText = '#111111';

    return (
        <div style={{
            width: '100%',

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            letterSpacing: '-0.5px',
            boxSizing: 'border-box'
        }}>

            {/* ==========================================
                1. 상단 주차 안내 지도 박스
            ========================================== */}
            <div style={{
                width: '100%',
                maxWidth: 1200,
                backgroundColor: '#FFFFFF',
                borderRadius: isMobile ? '24px' : '32px',
                padding: isMobile ? '30px 20px 40px' : '50px 60px 60px',
                boxSizing: 'border-box',
                boxShadow: '0 10px 40px rgba(0,0,0,0.05)', // 은은한 캔버스 그림자
                marginBottom: isMobile ? 30 : 50
            }}>

                {/* 타이틀 */}
                <div style={{
                    fontSize: isMobile ? 26 : 32,
                    fontWeight: 900,
                    color: titleColor,
                    marginBottom: isMobile ? 25 : 40
                }}>
                    주차 안내
                </div>

                {/* 주차장 지도 이미지 */}
                <div style={{ marginBottom: isMobile ? 30 : 40 }}>
                    {/* ★ PC/모바일 지도 이미지가 다르므로 각각 경로 설정 */}
                    <img
                        src={isMobile ? "/info15_mo.png" : "/info15.png"}
                        alt="주차장 안내 지도"
                        style={{
                            width: '100%',
                            display: 'block',
                            borderRadius: '16px'
                        }}
                    />
                </div>

                {/* 하단 주차장 카드 (행사장 주소 카드와 동일한 카드 형태) */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{
                        width: isMobile ? '100%' : undefined,
                        backgroundColor: '#34786A',
                        borderRadius: '12px',
                        padding: isMobile ? '12px 16px' : '14px 24px',
                        textAlign: 'center',
                        color: '#FFFFFF',
                        boxSizing: 'border-box'
                    }}>
                        <div style={{ fontSize: isMobile ? 15 : 18, fontWeight: 800, marginBottom: 4 }}>
                            새별오름주차장3
                        </div>
                        <div style={{ fontSize: isMobile ? 14 : 15, fontWeight: 400, opacity: 0.9 }}>
                            일반차량만 주차가능
                        </div>
                    </div>
                </div>

            </div>

          

        </div>
    );
}