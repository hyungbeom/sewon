import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Side() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    // 탭 상태 관리
    const [activeTab, setActiveTab] = useState('제주도 체험');
    const tabs = ['제주도 체험', '체험 프로그램', '친환경 체험', '체육대회'];

    // 주요 컬러
    const titleColor = '#245943';
    const grayBg = '#F7F8F9';
    const borderColor = '#E6E6E6';
    const darkText = '#111111';
    const grayText = '#555555';

    // ==========================================
    // ★ 탭별 데이터 관리 영역 ★
    // ==========================================
    const tabData = {
        '제주도 체험': {
            headerLabel1: '제주도를 방문한\n회원 및 가족 대상 특별 프로그램',
            headerLabel2: '제주의 옛 문화를 직접\n느낄 수 있는 제주도 체험 프로그램',
            infoLabel1: '2026년 3월 31일(화) ~ 4월 1일(수)',
            infoLabel2: '10:00 ~ 17:00(상시 운영)',
            infoLabel3: '부대행사장 내 체험존',
            cards: [
                { title: '제주 오메기떡 만들기 체험', desc: '제주에서 생산되는 차조를 주재료로한 특산품을 직접 만들어 보는 프로그램', time: '5 ~ 10분', img: '/program/side1.png' },
                { title: '제주 방언 배우기 & 퀴즈', desc: '제주도의 방언의 의미를 맞추는 퀴즈 프로그램', time: '5 ~ 10분',img: '/program/side2.png' },
                { title: '지게발 걷기 체험', desc: '제주의 전통문화인 지게발걷기 체험', time: '5 ~ 10분', img: '/program/side3.png' },
                { title: '돌하르방 오브제', desc: '제주 현무암 돌하르방 오브제를 직접 만드는 체험', time: '5 ~ 10분', img: '/program/side4.png' },
            ]
        },
        '체험 프로그램': {
            headerLabel1: '제주도를 방문한\n회원 및 가족 대상 특별 프로그램',
            headerLabel2: '회원들에게 흥미와 추억을\n남길 수 있는 체험 프로그램',
            infoLabel1: '2026년 3월 31일(화) ~ 4월 1일(수)',
            infoLabel2: '10:00 ~ 17:00(상시 운영)',
            infoLabel3: '부대행사장 내 체험존',
            cards: [
                { title: 'AI 포토부스', desc: 'AI가 촬영 즉시 얼굴 포즈 배경을 인식 보정하여 콘셉에 맞는 맞춤형 이미지 자동생성', time: '3분', img: '/program/side5.png' },
                { title: 'AI 사주 운세', desc: '인공지능이 개인의 기본 정보와 선택 입력을 분석해 즉석에서 맞춤형 운세와 해석을 제공하는 체험형 콘텐츠', time: '3분', img: '/program/side6.png' },
                { title: '캐리커쳐 체험', desc: '전문캐리커쳐강사가 그려주는 나만의 캐리커쳐 초상화', time: '5분',img: '/program/side7.png' },
            ]
        },
        '친환경 체험': {
            headerLabel1: '제주도를 방문한\n회원 및 가족 대상 특별 프로그램',
            headerLabel2: '탄소중립 관련 연계\n친환경 체험 프로그램',
            infoLabel1: '2026년 3월 31일(화) ~ 4월 1일(수)',
            infoLabel2: '10:00 ~ 17:00(상시 운영)',
            infoLabel3: '부대행사장 내 체험존',
            cards: [
                { title: '플로깅', desc: '1인당 플로깅키트 1개씩 지급\n플로깅 참여자에게 제주 특산품 제공', time: '30분', img: '/program/side8.png' },
                { title: '친환경 향수 만들기', desc: '본인이 원하는 향을 선택해 친환경재료를 활용한 향수 만들기', time: '5분', img: '/program/side9.png' },
            ]
        },
        '체육대회': {
            headerLabel1: '전국회원들이 함께 참여하는',
            headerLabel2: '한마음 체육대회',
            infoLabel1: '2026년 4월 1일(수)', // 체육대회는 날짜가 다름
            infoLabel2: '10:00 ~ 12:00',      // 시간도 다름
            infoLabel3: '행사장 내 공터',     // 장소도 다름
            // ★ 체육대회 탭은 라벨이 '참여인원', '진행', '규정' 으로 다릅니다. 이를 커스텀 처리하기 위해 추가 데이터를 넣습니다.
            cards: [
                { title: '팔씨름 대회', customLabels: [{l: '참여인원', v: '각 팀별 5명씩 참가'}, {l: '진행', v: '무대 위 MC 진행'}, {l: '규정', v: '국내 팔씨름 대회 규정'}], img: '/program/side10.png' },
                { title: '제기차기', customLabels: [{l: '참여인원', v: '각 팀별 5명씩 참가'}, {l: '진행', v: '제한시간 내 제기차기'}, {l: '규정', v: '성공 횟수 합산'}], img: '/program/side11.png' },
                { title: '협동 공튀기기', customLabels: [{l: '참여인원', v: '각 팀별 6명씩 참가'}, {l: '진행', v: '팀원 전원이 협력하여 공을 떨어뜨리지 않고 공튀기기'}, {l: '규정', v: '성공 횟수 합산'}], img: '/program/side12.png' },
            ]
        }
    };

    // 현재 선택된 탭의 데이터를 가져옵니다.
    const currentData = tabData[activeTab];

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            padding: isMobile ? '40px 0px 80px' : '80px 0px 120px',
            fontFamily: "'Pretendard', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif",
            letterSpacing: '-0.5px'
        }}>
            <div style={{ width: '100%', maxWidth: 1000 }}>

                {/* ==========================================
                    1. 상단 타이틀 & 탭 메뉴
                ========================================== */}
                <div style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: 'space-between',
                    alignItems: isMobile ? 'flex-start' : 'flex-end',
                    marginBottom: isMobile ? 30 : 40,
                    gap: isMobile ? 20 : 0
                }}>
                    <div style={{ fontSize: isMobile ? 26 : 32, fontWeight: 900, color: titleColor }}>
                        부대 프로그램
                    </div>

                    <div className="hide-scrollbar" style={{
                        display: 'flex',
                        gap: isMobile ? 15 : 20,
                        width: isMobile ? '100%' : 'auto',
                        overflowX: isMobile ? 'auto' : 'visible',
                        whiteSpace: 'nowrap',
                        paddingBottom: isMobile ? 5 : 0
                    }}>
                        {tabs.map((tab) => (
                            <div
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                style={{
                                    fontSize: isMobile ? 14 : 15,
                                    fontWeight: activeTab === tab ? 800 : 500,
                                    color: activeTab === tab ? darkText : '#999',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 6
                                }}
                            >
                                {activeTab === tab && <span style={{ fontSize: 20, lineHeight: 0 }}>·</span>}
                                {tab}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ==========================================
                    2. 탭 전용 안내 박스
                ========================================== */}
                <div style={{
                    backgroundColor: grayBg,
                    borderRadius: '24px',
                    padding: isMobile ? '30px 20px' : '40px 60px',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? 25 : 50,
                    marginBottom: isMobile ? 40 : 60,
                    // 탭이 바뀔 때마다 페이드인 애니메이션
                    animation: 'fadeIn 0.3s ease-in-out'
                }} key={`box-${activeTab}`}>

                    {/* 좌측 타이틀 영역 */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ color: grayText, fontSize: 14, fontWeight: 600, marginBottom: 10, lineHeight: 1.4, whiteSpace: 'pre-line' }}>
                            {currentData.headerLabel1}
                        </div>
                        <div style={{ color: titleColor, fontSize: isMobile ? 18 : 20, fontWeight: 800, lineHeight: 1.4, whiteSpace: 'pre-line' }}>
                            {currentData.headerLabel2}
                        </div>
                    </div>

                    {/* 중앙 선 */}
                    <div style={{ width: isMobile ? '100%' : 1, height: isMobile ? 1 : 'auto', backgroundColor: borderColor }} />

                    {/* 우측 일정 리스트 */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'center' }}>
                        {[
                            { label: '일정', value: currentData.infoLabel1 },
                            { label: '시간', value: currentData.infoLabel2 },
                            { label: '장소', value: currentData.infoLabel3 }
                        ].map((item, idx) => (
                            <div key={idx} style={{ display: 'flex', gap: 15, fontSize: isMobile ? 14 : 16 }}>
                                <div style={{ width: 40, fontWeight: 900, color: darkText }}>{item.label}</div>
                                <div style={{ flex: 1, color: grayText, fontWeight: 500 }}>{item.value}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ==========================================
                    3. 탭 전용 카드 리스트
                ========================================== */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 20 : 30 }}>
                    {currentData.cards.map((card, idx) => (
                        <div key={idx} style={{
                            border: `1px solid ${borderColor}`,
                            borderRadius: '24px',
                            padding: isMobile ? 0 : '30px',
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            gap: isMobile ? 0 : 40,
                            overflow: 'hidden',
                            backgroundColor: 'white',
                            animation: 'fadeIn 0.4s ease-in-out'
                        }}>

                            <img
                                src={card.img}
                                alt={card.title}
                                style={{
                                    width: isMobile ? '100%' : 240,
                                    height: isMobile ? 220 : 240,
                                    objectFit: 'cover',
                                    borderRadius: isMobile ? 0 : '16px',
                                    flexShrink: 0
                                }}
                            />

                            <div style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                padding: isMobile ? '25px 20px' : 0
                            }}>
                                <div style={{ fontSize: isMobile ? 20 : 22, fontWeight: 900, color: titleColor, marginBottom: 20 }}>
                                    {card.title}
                                </div>

                                <div style={{ width: '100%', height: 1, backgroundColor: borderColor, marginBottom: 20 }} />

                                {/* 체험내용 & 소요시간 (또는 체육대회 커스텀 라벨) */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 15, fontSize: isMobile ? 14 : 15 }}>

                                    {/* 체육대회 탭처럼 라벨 구조가 다른 경우를 위한 분기 처리 */}
                                    {card.customLabels ? (
                                        card.customLabels.map((lbl, lIdx) => (
                                            <div key={lIdx} style={{ display: 'flex', gap: 20 }}>
                                                <div style={{ width: 65, color: darkText, fontWeight: 800 }}>{lbl.l}</div>
                                                <div style={{ flex: 1, color: grayText }}>{lbl.v}</div>
                                            </div>
                                        ))
                                    ) : (
                                        // 일반적인 탭 (체험내용, 소요시간)
                                        <>
                                            <div style={{ display: 'flex', gap: 20 }}>
                                                <div style={{ width: 65, color: darkText, fontWeight: 800 }}>체험 내용</div>
                                                <div style={{ flex: 1, color: grayText, lineHeight: 1.5, whiteSpace: 'pre-line' }}>{card.desc}</div>
                                            </div>
                                            <div style={{ display: 'flex', gap: 20 }}>
                                                <div style={{ width: 65, color: darkText, fontWeight: 800 }}>소요 시간</div>
                                                <div style={{ flex: 1, color: grayText }}>{card.time}</div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>

            <style>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(5px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}