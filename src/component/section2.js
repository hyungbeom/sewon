import {useMediaQuery} from "react-responsive";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Section2() {
    const navigate = useNavigate();
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});

    // 현재 활성화된 메뉴 상태 관리 ('행사장 위치' 또는 '행사장 세부 위치')
    const [activeMenu, setActiveMenu] = useState('행사장 위치');

    // 시안에서 추출한 주요 컬러
    const titleColor = '#245943';      // 진한 초록색 (타이틀)
    const activeMenuColor = '#549B35'; // 활성화된 메뉴 (진한 연두색)
    const inactiveMenuColor = '#90BB4D';// 비활성화된 메뉴 (연한 연두색)
    const buttonBgColor = '#122345';   // 자세히 보러가기 버튼 (네이비)

    return (
        <div style={{
            backgroundColor: '#EAEC71',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center'
        }}>
            {/* 중앙 정렬 및 최대 너비 고정 컨테이너 */}
            <div style={{
                width: '100%',
                maxWidth: 1200,
                padding: isMobile ? '60px 20px 80px' : '150px 0px',
                boxSizing: 'border-box'
            }}>

                {!isMobile ? (
                    // ==========================================
                    // 💻 PC 버전 화면 (기존과 동일하게 두 가지 지도 모두 지원)
                    // ==========================================
                    <div style={{
                        display: 'flex',
                        gap: 32,
                        alignItems: 'stretch',
                    }}>

                        {/* [왼쪽 영역] 타이틀, 메뉴, 버튼 */}
                        <div style={{
                            width: 365,
                            flexShrink: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}>
                            <div>
                                <div style={{
                                    fontSize: 60,
                                    fontWeight: "bold",
                                    color: titleColor,
                                    letterSpacing: '-2px'
                                }}>
                                    오시는 길
                                </div>

                                <div style={{
                                    width: 72,
                                    height: 2,
                                    background: 'linear-gradient(90deg, rgba(243, 152, 0, 1) 26%, rgba(244, 161, 10, 1) 45%, rgba(248, 186, 37, 1) 76%, rgba(253, 210, 63, 1) 100%)',
                                    marginTop: 60,
                                    marginBottom: 84
                                }}/>

                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 40,
                                    fontSize: 24,
                                    fontWeight: 'bold',
                                    cursor: 'pointer'
                                }}>
                                    <div
                                        onClick={() => setActiveMenu('행사장 위치')}
                                        style={{color: activeMenu === '행사장 위치' ? activeMenuColor : inactiveMenuColor}}
                                    >
                                        행사장 위치
                                    </div>
                                    <div
                                        onClick={() => setActiveMenu('행사장 세부 위치')}
                                        style={{color: activeMenu === '행사장 세부 위치' ? activeMenuColor : inactiveMenuColor}}
                                    >
                                        행사장 세부 위치
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div
                                    onClick={() => navigate('/location/map')}
                                    style={{
                                        backgroundColor: buttonBgColor,
                                        color: 'white',
                                        padding: '15px 24px',
                                        borderRadius: '30px',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: 10,
                                        width: 'fit-content',
                                        fontSize: 15,
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
                                    }}>
                                    자세히 보러가기
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* [오른쪽 영역] 지도 이미지 및 주소 정보 (전환 시 페이드 인 애니메이션) */}
                        <div style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginRight: -80
                        }}>
                            <div key={activeMenu} className="section2-map-enter" style={{ width: '100%' }}>
                                {activeMenu === '행사장 위치' ? (
                                    <img src="/map.png" style={{width: 'calc(100% + 80px)', display: 'block'}}
                                         alt="행사장 위치 지도"/>
                                ) : (
                                    <img src="/map3.png" style={{width: 'calc(100% + 80px)', display: 'block'}}
                                         alt="행사장 세부 위치 약도"/>
                                )}
                            </div>
                        </div>

                    </div>
                ) : (
                    // ==========================================
                    // 📱 모바일 버전 화면 (세부 위치 생략 & 중앙 정렬)
                    // ==========================================
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30}}>


                        {/* 메인 지도 (모바일에서는 세부 위치 지도를 숨깁니다) */}
                        <img src="/map2.png" style={{width: '100%', display: 'block'}} alt="행사장 위치 지도"/>


                        {/* 모바일 자세히 보러가기 버튼 (글씨 길이에 맞게 알약 모양 유지) */}
                        <div
                            onClick={() => navigate('/location/map')}
                            style={{
                                backgroundColor: buttonBgColor,
                                color: 'white',
                                padding: '8px 12px',
                                borderRadius: '24px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 10,
                                width: 'fit-content', // 이전의 100% 꽉 차는 형태에서 알약 형태로 복구
                                fontSize: 16,
                                fontWeight: 500,
                                cursor: 'pointer',
                                boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
                            }}>
                            자세히 보러가기
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </div>
                    </div>
                )}

            </div>

        </div>
    );
}