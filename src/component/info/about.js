import { useMediaQuery } from "react-responsive";

export default function About() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    // 공통 컬러 설정

    const grayText = '#888888';
    const darkText = '#222222';
    const cardBg = '#F8F9FA'; // 연한 회색 배경

    // 공통 블릿 아이템 컴포넌트 (반복되는 구조를 깔끔하게 관리)
    const BulletItem = ({ title, desc }) => (
        <div style={{ display: 'flex', gap: 8, marginBottom: 15, fontSize: isMobile ? 14 : 15, lineHeight: 1.6, color: darkText }}>
            <div style={{ color: grayText, fontWeight: 800 }}>·</div>
            <div>
                <span style={{ fontWeight: 800 }}>{title}</span> {desc}
            </div>
        </div>
    );

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            // padding: isMobile ? '0 20px 80px' : '0 20px 150px',

            letterSpacing: '-0.5px'
        }}>



            {/* 메인 콘텐츠 컨테이너 (최대 너비 1200px) */}
            <div style={{ width: '100%', maxWidth: 1520 }}>

                {/* 2. 히어로 배너 이미지 영역 */}
                <div style={{
                    width: '100%',
                    // ★ 실제 농경지 이미지 경로로 변경해주세요
                    backgroundImage: ` url('/info1.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: isMobile ? 16 : 24,
                    padding: isMobile ? '120px 20px 30px' : '200px 50px 50px', // 아래쪽에 글씨가 오도록 패딩 조절
                    color: 'white',
                    marginBottom: isMobile ? 40 : 80,
                    boxSizing: 'border-box'
                }}>
                    {/* 모바일일 때 글씨 줄바꿈 시안 반영 */}
                    <div style={{ fontSize: isMobile ? 28 : 50, fontWeight: 500, marginBottom: 15, lineHeight: 1.3 }}>
                        한국후계농업경영인<br style={{ display: isMobile ? 'block' : 'none' }}/>이란?
                    </div>
                    <div style={{ fontSize: isMobile ? 14 : 24, fontWeight: 400, opacity: 0.9, lineHeight: 1.6, wordBreak: 'keep-all' }}>
                        대한민국 농업을 이끌어가는 농업인들의 권익 대변과 농업 발전을 목적으로 설립된 국내 최대의 농민 단체입니다.<br/>
                        주요 특징과 역할은 다음과 같습니다.
                    </div>
                </div>

                {/* 3. 4단 카드 그리드 영역 */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', // 모바일 1열, PC 2열
                    gap: isMobile ? 30 : 40,
                    alignItems: 'stretch',
                }}>

                    {/* --- 카드 1 --- */}
                    <div style={{ display: 'flex', flexDirection: 'column', minHeight: 0 }}>
                        <div style={{ fontSize: isMobile ? 22 : 40, fontWeight: 800, color: darkText, marginBottom: 20, flexShrink: 0 }}>
                            <span style={{ color: '#ccc', marginRight: 10 }}>1.</span> 정체성 및 구성원
                        </div>
                        <div style={{
                            backgroundColor: cardBg,
                            borderRadius: 16,
                            padding: isMobile ? '25px 20px' : '40px',
                            position: 'relative',
                            overflow: 'hidden',
                            flex: 1,
                            minHeight: 0,
                        }}>
                            <BulletItem
                                title="구성원:"
                                desc="'농업·농촌 및 식품산업 기본법'에 의거하여 정부로부터 후계농업경영인으로 선정된 전문 농업인들로 구성되어 있습니다. 즉, 단순한 농민 단체가 아니라, 국가가 미래 농업의 주역으로 인정한 정예 인력들의 연합체입니다."
                            />
                            <BulletItem
                                title="약칭:"
                                desc={<>흔히 <b>'한농연'</b>이라고 불립니다.</>}
                            />
                            <BulletItem
                                title="조직:"
                                desc="중앙연합회를 중심으로 도 연합회, 시·군·구 연합회, 읍·면·동 회까지 체계적인 전국 조직망을 갖추고 있습니다."
                            />
                            {/* 우측 하단 워터마크 아이콘 (배경) */}
                            <div style={{ position: 'absolute', right: 20, bottom: -10, opacity: 0.05, fontSize: 100 }}>👤</div>
                        </div>
                    </div>

                    {/* --- 카드 2 --- */}
                    <div style={{ display: 'flex', flexDirection: 'column', minHeight: 0 }}>
                        <div style={{ fontSize: isMobile ? 22 : 40, fontWeight: 800, color: darkText, marginBottom: 20, flexShrink: 0 }}>
                            <span style={{ color: '#ccc', marginRight: 10 }}>2.</span> 설립 목적
                        </div>
                        <div style={{
                            backgroundColor: cardBg,
                            borderRadius: 16,
                            padding: isMobile ? '25px 20px' : '40px',
                            position: 'relative',
                            overflow: 'hidden',
                            flex: 1,
                            minHeight: 0,
                            boxSizing: 'border-box'
                        }}>
                            <BulletItem
                                title="농민 권익 보호:"
                                desc="농산물 가격 안정, 농가 소득 보전 등 농민의 사회적·경제적 지위 향상을 위해 활동합니다."
                            />
                            <BulletItem
                                title="농정 개혁:"
                                desc="농업 관련 정책 개발 및 대안 제시를 통해 정부의 농업 정책에 직접적인 목소리를 냅니다."
                            />
                            <BulletItem
                                title="농업 발전:"
                                desc="과학 영농 실천과 농업 경영 합리화를 통해 농업의 경쟁력을 높입니다."
                            />
                            <div style={{ position: 'absolute', right: 20, bottom: -10, opacity: 0.05, fontSize: 100 }}>🎯</div>
                        </div>
                    </div>

                    {/* --- 카드 3 --- */}
                    <div style={{ display: 'flex', flexDirection: 'column', minHeight: 0 }}>
                        <div style={{ fontSize: isMobile ? 22 : 40, fontWeight: 800, color: darkText, marginBottom: 20, flexShrink: 0 }}>
                            <span style={{ color: '#ccc', marginRight: 10 }}>3.</span> 주요 활동
                        </div>
                        <div style={{
                            backgroundColor: cardBg,
                            borderRadius: 16,
                            padding: isMobile ? '25px 20px' : '40px',
                            position: 'relative',
                            overflow: 'hidden',
                            flex: 1,
                            minHeight: 0,
                        }}>
                            <BulletItem
                                title="농권 운동 및 정책 활동:"
                                desc="WTO, FTA 등 개방화 파고 속에서 우리 농업을 지키기 위한 집회, 공청회, 정책 제안 등을 주도합니다."
                            />
                            <BulletItem
                                title="교육 및 수련:"
                                desc="농업 경영인들의 역량 강화를 위한 전문 교육과 리더십 훈련을 실시합니다."
                            />
                            <BulletItem
                                title="전국대회 (한국후계농업경영인 전국대회):"
                                desc={<><br/><br/>2년마다 개최되는 한농연 최대의 행사입니다.<br/><br/>전국의 회원과 가족 수만 명이 한자리에 모여 단합을 도모하고, 농업의 비전을 선포하는 자리입니다. 학술 행사, 체육 활동, 농기자재 전시회, 문화 공연 등 다양한 프로그램이 포함된 대규모 축제 형식으로 진행됩니다.</>}
                            />
                            <div style={{ position: 'absolute', right: 20, bottom: -10, opacity: 0.05, fontSize: 100 }}>📢</div>
                        </div>
                    </div>

                    {/* --- 카드 4 --- */}
                    <div style={{ display: 'flex', flexDirection: 'column', minHeight: 0 }}>
                        <div style={{ fontSize: isMobile ? 22 : 40, fontWeight: 800, color: darkText, marginBottom: 20, flexShrink: 0 }}>
                            <span style={{ color: '#ccc', marginRight: 10 }}>4.</span> 사회적 위상
                        </div>
                        <div style={{
                            backgroundColor: cardBg,
                            borderRadius: 16,
                            padding: isMobile ? '25px 20px' : '40px',
                            position: 'relative',
                            overflow: 'hidden',
                            flex: 1,
                            minHeight: 0,
                            boxSizing: 'border-box',
                            display: 'flex', // 텍스트 중앙 정렬,

                            fontWeight : 900
                        }}>
                            <div style={{ fontSize: isMobile ? 15 : 16,  color: darkText, lineHeight: 1.6, wordBreak: 'keep-all', zIndex: 1 }}>
                                한국농촌지도자중앙연합회 등과 함께 한국 농업계를 대표하는 단체로서, 정부의 농정 파트너이자 농업 현장의 목소리를 가장 강력하게 전달하는 스피커 역할을 하고 있습니다.
                            </div>
                            <div style={{ position: 'absolute', right: 20, bottom: -10, opacity: 0.05, fontSize: 100, zIndex: 0 }}>🌍</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}