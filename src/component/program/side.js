import {useState} from "react";
import {useMediaQuery} from "react-responsive";

export default function Side() {
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});

    // 탭 상태 관리
    const [activeTab, setActiveTab] = useState('제주도 체험');
    const tabs = ['제주도 체험', '체험 프로그램', '친환경 체험', '체육대회'];

    // 주요 컬러
    const titleColor = '#245943';
    const grayBg = '#F7F8F9';
    const borderColor = '#E6E6E6';
    const darkText = '#224C48';
    const grayText = '#555555';

    // ==========================================
    // ★ 탭별 데이터 관리 영역 ★
    // ==========================================
    const tabData = {
        '제주도 체험': {
            headerLabel1: '제주도를 방문한\n회원 및 가족 대상 특별 프로그램',
            headerLabel2: `제주의 옛 문화를 직접\n느낄 수 있는 ${isMobile ? '' : '\n'} 제주도 체험 프로그램`,
            infoLabel1: '2026년 3월 31일(화) ~ 4월 1일(수)',
            infoLabel2: '10:00 ~ 17:00(상시 운영)',
            infoLabel3: '부대행사장 내 체험존',
            participantLabel: '행사장 방문객 누구나 (1일 최대 300명)',
            methodLabel: '1. 무료 체험\n2. 진행요원의 안내에 따라 체험 진행',
            cards: [
                {
                    title: '제주 오메기떡 만들기 체험',
                    desc: '제주 오메기떡이란 제주산 차조와 쑥을 빚어 팥고물을 듬뿍 묻혀낸, 제주의 깊은 맛과 정성이 담긴 전통 향토 떡입니다.',
                    timeDo: '3월 31일(화) ~ 4월 1일(수) 10:00 ~ 17:00',
                    place: '행사장 內 체험존',
                    target: '행사장 방문객 누구나 (1일 최대 300명)',
                    do: '1.무료체험\n 2. 진행요원의 안내에 따라 체험 진행',
                    time: '5 ~ 10분',
                    img: '/program/side1.png'
                },
                {
                    title: '제주 방언 배우기 & 퀴즈',
                    desc: '제주 여행의 재미를 두 배로 더해줄 \'제주 방언 배우기\' 시간입니다. 낯설지만 정겨운 제주의 언어를 퀴즈로 쉽고 재미있게 익혀보세요. 일상적인 인사말부터 실전 여행 용어까지, 퀴즈를 풀다 보면 어느새 제주의 문화와 한 걸음 더 가까워집니다.',
                    timeDo: '3월 31일(화) ~ 4월 1일(수) 10:00 ~ 17:00',
                    place: '행사장 內 체험존',
                    target: '행사장 방문객 누구나 (1일 최대 300명)',
                    do: '1. 무료 체험\n2. 제주방언 전문강사 직접 진행',
                    time: '5 ~ 10분',
                    img: '/program/side2.png'
                },
                {
                    title: '지게발 걷기 체험',
                    desc: '지게발걷기 놀이는 눈이나 비가 온 날 발을 적시지 않거나 눈에 빠지지 않고 갈 수 있는 방법을 고안해서 자연스럽게 생겨난 놀이로, 몸의 수평을 이루는 것이 놀이의 관건이다.',
                    timeDo: '3월 31일(화) ~ 4월 1일(수) 10:00 ~ 17:00',
                    place: '행사장 內 체험존',
                    target: '행사장 방문객 누구나 (1일 최대 300명)',
                    do: '1. 무료 체험\n2. 진행요원의 안내에 따라 체험 진행',
                    time: '5 ~ 10분',
                    img: '/program/side3.png'
                },
                {
                    title: '귤피 낭만 향기주머니',
                    desc: '제주의 햇살을 머금은 말린 귤피와 싱그러운 제주 허브, 그리고 피톤치드 가득한 편백큐브를 섞어 나만의 향기를 완성해 보세요. 귀여운 제주 캐릭터 주머니 속에 제주의 자연을 오롯이 담아갈 수 있습니다.',
                    timeDo: '3월 31일(화) ~ 4월 1일(수) 10:00 ~ 17:00',
                    place: '행사장 內 체험존',
                    target: '행사장 방문객 누구나 (1일 최대 300명)',
                    do: '1. 무료 체험\n2. 전문강사가 직접 진행',
                    time: '5 ~ 10분',
                    img: '/program/side4.png'
                }
            ]
        },
        '체험 프로그램': {
            headerLabel1: '제주도를 방문한\n회원 및 가족 대상 특별 프로그램',
            headerLabel2: '회원들에게 흥미와 추억을\n남길 수 있는 체험 프로그램',
            infoLabel1: '2026년 3월 31일(화) ~ 4월 1일(수)',
            infoLabel2: '10:00 ~ 17:00(상시 운영)',
            infoLabel3: '부대행사장 내 체험존',
            participantLabel: '행사장 방문객 누구나 (1일 최대 300명)',
            methodLabel: '1. 무료 체험\n2. 진행요원의 안내에 따라 체험 진행',
            cards: [
                {
                    title: 'AI 포토부스',
                    desc: 'AI가 촬영 즉시 얼굴 포즈 배경을 인식 보정하여 콘셉에 맞는 맞춤형 이미지 자동생성',
                    time: '3분',
                    img: '/program/side5.png'
                },
                {
                    title: 'AI 사주 운세',
                    desc: '인공지능이 개인의 기본 정보와 선택 입력을 분석해 즉석에서 맞춤형 운세와 해석을 제공하는 체험형 콘텐츠',
                    time: '3분',
                    img: '/program/side6.png'
                },
                {title: '캐리커쳐 체험', desc: '전문캐리커쳐강사가 그려주는 나만의 캐리커쳐 초상화', time: '5분', img: '/program/side7.png'},
            ]
        },
        '친환경 체험': {
            headerLabel1: '제주도를 방문한\n회원 및 가족 대상 특별 프로그램',
            headerLabel2: '탄소중립 관련 연계\n친환경 체험 프로그램',
            infoLabel1: '2026년 3월 31일(화) ~ 4월 1일(수)',
            infoLabel2: '10:00 ~ 17:00(상시 운영)',
            infoLabel3: '부대행사장 내 체험존',
            participantLabel: '행사장 방문객 누구나 (1일 최대 300명)',
            methodLabel: '1. 무료 체험\n2. 진행요원의 안내에 따라 체험 진행',
            cards: [
                {title: '플로깅', desc: '1인당 플로깅키트 1개씩 지급\n플로깅 참여자에게 제주 특산품 제공', time: '30분', img: '/program/side8.png'},
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
                {
                    title: '팔씨름 대회',
                    customLabels: [
                        {l: '참여인원', v: '각 팀별 5명씩 참가 (남자 3명, 여자 2명)'},
                        {l: '진행', v: '무대 위 MC 진행'},
                        {l: '규정', v: '국내 팔씨름 대회 규정'}
                    ],
                    img: '/program/side10.png'
                },
                {
                    title: '단체줄넘기',
                    customLabels: [
                        {l: '참여인원', v: '각 팀별 7명씩 참가\n줄 돌리는 사람 (남자 2명)\n뛰는 사람 (남자 3명, 여자 2명)'},
                        {l: '진행', v: '제한시간 내 줄넘기'},
                        {l: '규정', v: '성공 횟수 합산'}
                    ],
                    img: '/program/side11.png'
                },
                {
                    title: '협동 공튀기기',
                    customLabels: [{l: '참여인원', v: '각 팀별 6명씩 참가'}, {
                        l: '진행',
                        v: '팀원 전원이 협력하여 공을 떨어뜨리지 않고 공튀기기'
                    }, {l: '규정', v: '성공 횟수 합산'}],
                    img: '/program/side12.png'
                },
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

            letterSpacing: '-0.5px'
        }}>
            <div style={{width: '100%', maxWidth: 1400}}>

                {/* ==========================================
                    1. 상단 타이틀 & 탭 메뉴
                ========================================== */}
                <div style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: 'space-between',
                    alignItems: isMobile ? 'flex-start' : 'center',
                    marginBottom: isMobile ? 30 : 40,
                    gap: isMobile ? 20 : 0
                }}>
                    <div style={{fontSize: isMobile ? 26 : 32, fontWeight: 900, color: titleColor, flexShrink: 0}}>
                        부대 프로그램
                    </div>

                    <div className="hide-scrollbar" style={{
                        display: 'flex',
                        gap: isMobile ? 15 : 16,
                        width: isMobile ? '100%' : 'auto',
                        overflowX: isMobile ? 'auto' : 'visible',
                        whiteSpace: 'nowrap',
                        paddingBottom: isMobile ? 5 : 0,
                        flexShrink: 0
                    }}>
                        {tabs.map((tab) => {
                            const isActive = activeTab === tab;
                            if (isMobile) {
                                return (
                                    <div
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        style={{
                                            fontSize: 14,
                                            fontWeight: isActive ? 800 : 500,
                                            color: isActive ? darkText : '#999',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 6
                                        }}
                                    >
                                        {isActive && <span style={{fontSize: 20, lineHeight: 0}}>·</span>}
                                        {tab}
                                    </div>
                                );
                            }
                            // PC: 활성 = 검정 알약 배경 + 흰 글씨, 비활성 = 연한 회색 글씨만
                            return (
                                <div
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    style={{
                                        fontSize: 15,
                                        fontWeight: isActive ? 600 : 400,
                                        color: isActive ? '#FFFFFF' : '#999999',
                                        backgroundColor: isActive ? '#000000' : 'transparent',
                                        padding: '10px 20px',
                                        borderRadius: 9999,
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    {tab}
                                </div>
                            );
                        })}
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
                    animation: 'fadeIn 0.3s ease-in-out'
                }} key={`box-${activeTab}`}>

                    {/* 좌측 타이틀 영역 (flex: 2로 수정) */}
                    <div style={{
                        flex: isMobile ? 1 : 1.8, // PC에서만 2의 비율
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        color: '#224C48'
                    }}>
                        <div style={{
                            fontSize: isMobile ? 16 : 24,
                            fontWeight: 400,
                            marginBottom: 10,
                            lineHeight: 1.4,
                            whiteSpace: 'pre-line'
                        }}>
                            {currentData.headerLabel1}
                        </div>
                        <div style={{
                            color: titleColor,
                            fontSize: isMobile ? 16 : 32,
                            fontWeight: 800,
                            lineHeight: 1.4,
                            whiteSpace: 'pre-line'
                        }}>
                            {currentData.headerLabel2}
                        </div>
                    </div>

                    {/* 중앙 선 */}
                    <div style={{
                        width: isMobile ? '100%' : 1,
                        height: isMobile ? 1 : 'auto',
                        backgroundColor: borderColor
                    }}/>

                    {/* 우측 일정 리스트 (flex: 3으로 수정) */}
                    <div style={{
                        flex: isMobile ? 1 : 3, // PC에서만 3의 비율
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 12,
                        justifyContent: 'center'
                    }}>
                        {[
                            {label: '일정', value: currentData.infoLabel1},
                            {label: '시간', value: currentData.infoLabel2},
                            {label: '장소', value: currentData.infoLabel3}
                        ].map((item, idx) => (
                            <div key={idx} style={{
                                display: 'flex',
                                gap: 15,
                                fontSize: isMobile ? 14 : 28,
                                alignItems: 'baseline'
                            }}>
                                <div style={{
                                    width: isMobile ? 30 : 100,
                                    fontWeight: 900,
                                    color: darkText,
                                    flexShrink: 0
                                }}>{item.label}</div>
                                <div style={{flex: 1, color: grayText, fontWeight: 500}}>{item.value}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ==========================================
                    3. 탭 전용 카드 리스트 (첨부 시안: 이미지 ~45% | 글 ~55%, 하단 설명문)
                ========================================== */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: isMobile ? 20 : 30,
                    minWidth: 0,
                    maxWidth: '100%'
                }}>
                    {currentData.cards.map((card, idx) => {
                        const useInfoLayout = !card.customLabels && currentData.participantLabel;
                        const hasFullInfo = card.timeDo != null || card.place != null || card.target != null || card.do != null;
                        const detailRows = card.customLabels
                            ? card.customLabels.map((lbl) => ({label: lbl.l, value: lbl.v}))
                            : useInfoLayout
                                ? hasFullInfo
                                    ? [
                                        {label: '운영 시간', value: card.timeDo},
                                        {label: '운영 장소', value: card.place},
                                        {label: '참여 대상', value: card.target},
                                        {label: '운영 방법', value: card.do},
                                        {label: '소요 시간', value: card.time ? `${card.time} 소요` : ''}
                                    ].filter((r) => r.value)
                                    : [
                                        {label: '체험 내용', value: card.desc || ''},
                                        {label: '소요 시간', value: card.time ? `${card.time} 소요` : ''}
                                    ].filter((r) => r.value)
                                : [];

                        return (
                            <div key={idx} style={{
                                border: `1px solid ${borderColor}`,
                                borderRadius: '24px',
                                padding: isMobile ? 0 : 30,
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'hidden',
                                backgroundColor: 'white',
                                animation: 'fadeIn 0.4s ease-in-out',
                                minWidth: isMobile ? 0 : undefined,
                                maxWidth: isMobile ? '100%' : undefined
                            }}>
                                {/* 상단: 이미지 + 글 (가로 배치, 이미지 ~45% / 글 ~55%) */}
                                <div style={{
                                    display: 'flex',
                                    flexDirection: isMobile ? 'column' : 'row',
                                    gap: isMobile ? 0 : 60,
                                    flex: 1,
                                    minWidth: isMobile ? 0 : undefined
                                }}>
                                    <div style={{
                                        width: isMobile ? '100%' : '45%',
                                        flexShrink: 0,
                                        minWidth: isMobile ? 0 : undefined,
                                        borderRadius: isMobile ? 0 : 12,
                                        overflow: isMobile ? 'visible' : 'hidden',
                                        padding: isMobile ? '16px 16px 0' : 0,
                                        boxSizing: 'border-box'
                                    }}>
                                        <img
                                            src={card.img}
                                            alt={card.title}
                                            style={{
                                                width: '100%',
                                                maxWidth: '100%',
                                                height: 'auto',
                                                objectFit: isMobile ? 'contain' : 'cover',
                                                display: 'block',
                                                borderRadius: isMobile ? 12 : 0
                                            }}
                                        />
                                    </div>

                                    <div style={{
                                        flex: 1,
                                        minWidth: 0,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        padding: isMobile ? '24px 20px 20px' : 0
                                    }}>
                                        <div style={{
                                            fontSize: isMobile ? 20 : 32,
                                            fontWeight: 800,
                                            color: titleColor,
                                            marginBottom: 12
                                        }}>
                                            {card.title}
                                        </div>
                                        <div style={{
                                            width: '100%',
                                            height: 3,
                                            backgroundColor: 'black',
                                            marginBottom: 20
                                        }}/>

                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: isMobile ? 16 : 12,
                                            fontSize: isMobile ? 14 : 24
                                        }}>
                                            {detailRows.map((row, rIdx) => (
                                                <div key={rIdx} style={{
                                                    display: 'flex',
                                                    gap: isMobile ? 12 : 16,
                                                    alignItems: 'baseline'
                                                }}>
                                                    <div style={{
                                                        width: isMobile ? 72 : 120,
                                                        flexShrink: 0,
                                                        color: darkText,
                                                        fontWeight: 400
                                                    }}>{row.label}</div>
                                                    <div style={{
                                                        flex: 1,
                                                        color: grayText,
                                                        lineHeight: 1.5,
                                                        whiteSpace: 'pre-line'
                                                    }}>{row.value}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* 하단: 설명 문단 (전체 정보 카드만; 체험 프로그램은 오른쪽에 체험 내용 표시) */}
                                {hasFullInfo && card.desc && (
                                    <div style={{
                                        marginTop: 0,
                                        paddingTop: 40,
                                        paddingLeft: isMobile ? 20 : 0,
                                        paddingRight: isMobile ? 20 : 0,
                                        paddingBottom: isMobile ? 24 : 0,
                                        fontSize: isMobile ? 14 : 24,
                                        color: darkText,
                                        lineHeight: 1.6
                                    }}>
                                        {card.desc}
                                    </div>
                                )}
                            </div>
                        );
                    })}
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