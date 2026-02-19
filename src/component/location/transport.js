import { useMediaQuery } from "react-responsive";

export default function Transport() {
    // 768px 이하 모바일 화면 감지
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    // 주요 컬러 설정
    const titleColor = '#245943';   // 타이틀 짙은 초록색
    const darkText = '#111111';     // 정류장 이름 등 강조 텍스트
    const grayText = '#666666';     // 탑승/환승 등 설명 텍스트
    const redPoint = '#E53A40';     // '가장 추천' 포인트 컬러
    const cardBgMobile = '#F2F8CA'; // 모바일 버전 카드 배경색

    // 공통 가로 구분선 컴포넌트
    const Divider = () => (
        <div style={{
            width: '100%',
            height: 1,
            backgroundColor: 'rgba(255,255,255,0.8)',
            margin: isMobile ? '40px 0' : '60px 0'
        }} />
    );

    return (
        <div style={{
            width: '100%',

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: isMobile ? '40px 0px 80px' : '80px 0px 120px',
            fontFamily: "'Pretendard', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif",
            letterSpacing: '-0.5px',
            boxSizing: 'border-box'
        }}>

            {/* 메인 컨테이너 (최대 너비 1000px) */}
            <div style={{ width: '100%', maxWidth: 1000 }}>

                {/* 0. 상단 헤더 이미지 */}
                <div style={{ marginBottom: isMobile ? 40 : 60 }}>
                    {/* ★ PC/모바일 이미지가 다르다면 각각 경로를 지정해주세요 */}
                    <img
                        src={isMobile ? "/info16_mo.png" : "/info16.png"}
                        alt="대중교통 안내"
                        style={{ width: '100%', display: 'block' }}
                    />
                </div>

                {/* ==========================================
                    1. 제주국제공항 ➔ 새별오름
                ========================================== */}
                <div style={{ marginBottom: 20 }}>
                    <div style={{ fontSize: isMobile ? 24 : 30, fontWeight: 900, color: titleColor, marginBottom: 15, display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ fontSize: isMobile ? 28 : 34 }}>✈️</span> 제주국제공항 ➔ 새별오름
                    </div>
                    <div style={{ fontSize: isMobile ? 14 : 16, color: darkText, marginBottom: isMobile ? 25 : 40, paddingLeft: isMobile ? 0 : 45 }}>
                        <span style={{ color: grayText, marginRight: 8 }}>출발 정류장</span>
                        <span style={{ fontWeight: 800 }}>제주국제공항5 또는 제주국제공항6</span>
                        <span style={{ color: grayText }}> (공항 국내선 도착층 앞 버스정류장)</span>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        gap: isMobile ? 20 : 60,
                        paddingLeft: isMobile ? 0 : 45
                    }}>
                        {/* 방법 1 */}
                        <div style={{
                            flex: 1,
                            backgroundColor: isMobile ? cardBgMobile : 'transparent',
                            borderRadius: '16px',
                            padding: isMobile ? '25px' : '0'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                                <span style={{ fontSize: isMobile ? 20 : 24, fontWeight: 900, color: titleColor }}>방법 1.</span>
                                {!isMobile && <span style={{ fontSize: 14, fontWeight: 800 }}>제주관광대학 환승</span>}
                                {/* PC는 빨간 글씨, 모바일은 빨간 뱃지(Pill) */}
                                {isMobile ? (
                                    <div style={{ backgroundColor: redPoint, color: 'white', fontSize: 12, fontWeight: 800, padding: '4px 10px', borderRadius: '20px', marginLeft: 'auto' }}>
                                        가장 추천
                                    </div>
                                ) : (
                                    <span style={{ fontSize: 14, fontWeight: 800, color: redPoint }}>(가장 추천)</span>
                                )}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 10 : 0 }}>
                                {['제주국제공항5', '182번 탑승', '제주관광대학/제주영송학교 [북] 하차', '282번 또는 255번 환승', '새별오름입구 하차'].map((text, idx) => (
                                    <div key={idx}>
                                        <div style={{ fontSize: 15, fontWeight: idx % 2 === 0 ? 800 : 500, color: idx % 2 === 0 ? darkText : grayText }}>
                                            {text}
                                        </div>
                                        {/* PC에서만 세로선 표시 */}
                                        {!isMobile && idx < 4 && (
                                            <div style={{ width: 1, height: 20, backgroundColor: titleColor, margin: '8px 0 8px 8px' }} />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 방법 2 */}
                        <div style={{
                            flex: 1,
                            backgroundColor: isMobile ? cardBgMobile : 'transparent',
                            borderRadius: '16px',
                            padding: isMobile ? '25px' : '0'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                                <span style={{ fontSize: isMobile ? 20 : 24, fontWeight: 900, color: titleColor }}>방법 2.</span>
                                {!isMobile && <span style={{ fontSize: 14, fontWeight: 800 }}>한라병원 환승</span>}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 10 : 0 }}>
                                {['제주국제공항6', '315번 또는 316번 탑승', '한라병원 [서] 하차 (환승)', '251, 252, 253, 254, 255, 282번 환승', '새별오름입구 하차'].map((text, idx) => (
                                    <div key={idx}>
                                        <div style={{ fontSize: 15, fontWeight: idx % 2 === 0 ? 800 : 500, color: idx % 2 === 0 ? darkText : grayText }}>
                                            {text}
                                        </div>
                                        {!isMobile && idx < 4 && (
                                            <div style={{ width: 1, height: 20, backgroundColor: titleColor, margin: '8px 0 8px 8px' }} />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <Divider />

                {/* ==========================================
                    2. 제주시버스터미널 ➔ 새별오름
                ========================================== */}
                <div>
                    <div style={{ fontSize: isMobile ? 24 : 30, fontWeight: 900, color: titleColor, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ fontSize: isMobile ? 28 : 34 }}>🚌</span> 제주시버스터미널 ➔ 새별오름
                    </div>

                    <div style={{
                        backgroundColor: isMobile ? cardBgMobile : 'transparent',
                        borderRadius: '16px',
                        padding: isMobile ? '25px' : '0 0 0 45px',
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        alignItems: isMobile ? 'flex-start' : 'center',
                        gap: isMobile ? 12 : 0
                    }}>
                        <div style={{ fontSize: 15, fontWeight: 800, color: darkText }}>제주버스터미널</div>
                        {/* PC용 가로 연결선 */}
                        {!isMobile && <div style={{ flex: 1, height: 1, backgroundColor: titleColor, margin: '0 20px', opacity: 0.3 }} />}

                        <div style={{ fontSize: 15, fontWeight: 500, color: grayText }}>251, 253, 254, 255, 282번 탑승</div>
                        {!isMobile && <div style={{ flex: 1, height: 1, backgroundColor: titleColor, margin: '0 20px', opacity: 0.3 }} />}

                        <div style={{ fontSize: 15, fontWeight: 800, color: darkText }}>새별오름입구 하차</div>
                    </div>
                </div>

                <Divider />

                {/* ==========================================
                    3. 제주항(국제여객터미널) ➔ 새별오름
                ========================================== */}
                <div>
                    <div style={{ fontSize: isMobile ? 24 : 30, fontWeight: 900, color: titleColor, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ fontSize: isMobile ? 28 : 34 }}>🚢</span> 제주항 <span style={{ fontSize: isMobile ? 18 : 22, fontWeight: 600 }}>(국제여객터미널)</span> ➔ 새별오름
                    </div>

                    <div style={{
                        backgroundColor: isMobile ? cardBgMobile : 'transparent',
                        borderRadius: '16px',
                        padding: isMobile ? '25px' : '0 0 0 45px',
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        alignItems: isMobile ? 'flex-start' : 'center',
                        gap: isMobile ? 12 : 0
                    }}>
                        <div style={{ fontSize: 15, fontWeight: 800, color: darkText }}>제6부두</div>
                        {!isMobile && <div style={{ flex: 1, height: 1, backgroundColor: titleColor, margin: '0 15px', opacity: 0.3 }} />}

                        <div style={{ fontSize: 15, fontWeight: 500, color: grayText }}>351번 탑승</div>
                        {!isMobile && <div style={{ flex: 1, height: 1, backgroundColor: titleColor, margin: '0 15px', opacity: 0.3 }} />}

                        <div style={{ fontSize: 15, fontWeight: 800, color: darkText }}>동산교 하차 (환승)</div>
                        {!isMobile && <div style={{ flex: 1, height: 1, backgroundColor: titleColor, margin: '0 15px', opacity: 0.3 }} />}

                        <div style={{ fontSize: 15, fontWeight: 500, color: grayText }}>254번 또는 282번 환승</div>
                        {!isMobile && <div style={{ flex: 1, height: 1, backgroundColor: titleColor, margin: '0 15px', opacity: 0.3 }} />}

                        <div style={{ fontSize: 15, fontWeight: 800, color: darkText }}>새별오름입구 하차</div>
                    </div>
                </div>

                <Divider />

                {/* ==========================================
                    4. 하단 하차 정보 박스
                ========================================== */}
                <div style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '24px',
                    padding: isMobile ? '30px 20px' : '40px 60px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 15,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                    marginBottom: 40
                }}>
                    <div style={{ display: 'flex', gap: 20 }}>
                        <div style={{ width: 80, fontSize: 16, color: grayText, fontWeight: 600 }}>하차 정류장</div>
                        <div style={{ flex: 1, fontSize: 16, color: darkText, fontWeight: 900 }}>새별오름입구</div>
                    </div>

                    {/* 구분선 */}
                    <div style={{ width: '100%', height: 1, backgroundColor: '#EEEEEE', margin: '5px 0' }} />

                    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 10 : 20 }}>
                        <div style={{ width: 80, fontSize: 16, color: grayText, fontWeight: 600 }}>이동 시간</div>
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                            <div style={{ fontSize: 16, color: darkText, fontWeight: 600 }}>하차 후 도보 약 10~15분 이동</div>
                            <div style={{ fontSize: 16, color: darkText, fontWeight: 500 }}>
                                {isMobile ? '' : '교통 상황에 따라 '}전체 소요시간 <span style={{ fontWeight: 900 }}>약 1시간 10분 ~ 1시간 40분</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5. 하단 경고 문구 */}
                <div style={{ textAlign: 'center', fontSize: isMobile ? 13 : 15, color: grayText, lineHeight: 1.6 }}>
                    제주 버스는 배차 간격이 길 수 있으므로, 출발 전 <span style={{ fontWeight: 800, color: darkText }}>&lt;카카오버스 / 네이버지도 앱&gt;</span>으로<br style={{ display: isMobile ? 'block' : 'none' }} /> 실시간 도착 정보를 확인하시기 바랍니다.
                </div>

            </div>
        </div>
    );
}