import { useMediaQuery } from "react-responsive";

export default function Parking() {
    // 768px 이하 모바일 화면 감지
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    // 시안에서 추출한 주요 컬러
    const titleColor = '#245943';   // 상단 타이틀 짙은 초록색
    const badgeBgColor = '#3F6452'; // 주차장 이름 뱃지 배경색
    const qrBgColor = '#547A6A';    // 하단 QR 영역 배경색
    const qrTextColor = '#50A861';  // 하단 QR 설명 연두색 텍스트
    const darkText = '#111111';

    return (
        <div style={{
            width: '100%',

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: "'Pretendard', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif",
            letterSpacing: '-0.5px',
            boxSizing: 'border-box'
        }}>

            {/* ==========================================
                1. 상단 주차 안내 지도 박스
            ========================================== */}
            <div style={{
                width: '100%',
                maxWidth: 1000,
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

                {/* 하단 주차장 뱃지 (Pill 형태) */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{
                        backgroundColor: badgeBgColor,
                        borderRadius: '40px', // 알약 모양
                        padding: isMobile ? '16px 30px' : '20px 40px',
                        textAlign: 'center',
                        color: '#FFFFFF',
                        boxShadow: '0 6px 15px rgba(0,0,0,0.1)'
                    }}>
                        <div style={{ fontSize: isMobile ? 15 : 18, fontWeight: 800, marginBottom: 4 }}>
                            새별오름주차장3
                        </div>
                        <div style={{ fontSize: isMobile ? 13 : 15, fontWeight: 400, opacity: 0.9 }}>
                            일반차량만 주차가능
                        </div>
                    </div>
                </div>

            </div>

            {/* ==========================================
                2. 하단 실시간 주차 시스템 (QR) 박스
            ========================================== */}
            <div style={{
                width: '100%',
                maxWidth: 600, // QR 박스는 지도 박스보다 가로 폭이 좁게 시안 반영
                display: 'flex',
                // ★ 핵심 디테일: PC는 가로(row) 배치, 모바일은 세로로 뒤집어서(column-reverse) 흰색 텍스트가 위로 오게 함
                flexDirection: isMobile ? 'column-reverse' : 'row',
                borderRadius: '24px',
                overflow: 'hidden', // 안쪽 배경색들이 둥근 테두리에 깎이도록 설정
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
            }}>

                {/* 초록색 QR 영역 (PC: 좌측 / 모바일: 하단) */}
                <div style={{
                    flex: 1,
                    backgroundColor: qrBgColor,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: isMobile ? '40px 20px' : '40px 30px'
                }}>
                    <div style={{
                        backgroundColor: '#FFFFFF',
                        padding: '15px',
                        borderRadius: '12px',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                    }}>
                        <img
                            src="/qr.png" // ★ 실제 QR 코드 이미지 경로로 변경해 주세요
                            alt="실시간 주차 확인 QR"
                            style={{ width: isMobile ? 140 : 160, height: isMobile ? 140 : 160, display: 'block' }}
                        />
                    </div>
                </div>

                {/* 하얀색 텍스트 영역 (PC: 우측 / 모바일: 상단) */}
                <div style={{
                    flex: 1.2,
                    backgroundColor: '#FFFFFF',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: isMobile ? '40px 30px' : '40px 50px'
                }}>
                    <div style={{
                        fontSize: isMobile ? 24 : 28,
                        fontWeight: 900,
                        color: darkText,
                        marginBottom: 15,
                        letterSpacing: '-1px'
                    }}>
                        실시간 주차 시스템
                    </div>
                    <div style={{
                        fontSize: isMobile ? 16 : 18,
                        fontWeight: 600,
                        color: qrTextColor,
                        lineHeight: 1.5
                    }}>
                        QR 코드 활용<br/>
                        주차 가능여부 확인
                    </div>
                </div>

            </div>

        </div>
    );
}