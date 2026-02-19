import ExpandingCards from "./ExpandingCards";
import {useMediaQuery} from "react-responsive";
import {useState} from "react";

export default function Section3() {
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});
    const [activeTab, setActiveTab] = useState('개막식'); // 탭 상태 관리

    // 디자인에 사용된 주요 컬러
    const titleColor = '#254A5E'; // 짙은 네이비/녹색 (타이틀용)
    const highlightColor = '#F2C94C'; // 노란색
    const textColor = '#FFFFFF'; // 기본 흰색 텍스트
    return <div style={{
        position: 'relative',
        width: '100%',
        background: 'linear-gradient(to bottom, #EAEC71, white)',
    }}>
        {/* 1. 실제 이미지 (비율에 맞춰 div 높이를 자동으로 잡아줌) */}
        <img
            src="/pc/background2.png"
            alt="배경"
            style={{ width: '100%', display: 'block' }}
        />

        {/* 2. 그 위에 글씨나 내용을 올리고 싶을 때 쓰는 투명 덮개 */}
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
        }}>
            <div style={{
                padding : '200px ',
                display: 'flex',
                gap: 32 // ★ 핵심 1: 두 영역 사이의 간격을 정확히 32px로 띄움
            }}>



                {/* 메인 콘텐츠를 감싸는 컨테이너 (최대 너비 고정) */}
                <div style={{
                    width: '100%',
                    padding: isMobile ? '80px 20px' : '150px 20px',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? 50 : 100,
                    boxSizing: 'border-box'
                }}>

                    {/* ==========================================
                    [왼쪽] 메뉴 탭 영역
                ========================================== */}
                    <div style={{ width: isMobile ? '100%' : 250, flexShrink: 0 }}>
                        {/* 섹션 타이틀 */}
                        <div style={{
                            fontSize: isMobile ? 40 : 50,
                            fontWeight: 900,
                            color: titleColor,
                            lineHeight: 1.2,
                            letterSpacing: '-2px'
                        }}>
                            프로그램<br/>
                            <span style={{ fontWeight: 300 }}>안내</span>
                        </div>
                        {/* 타이틀 아래 노란색 짧은 선 */}
                        <div style={{ width: 40, height: 3, backgroundColor: highlightColor, margin: '20px 0 40px 0' }} />

                        {/* 탭 버튼들 */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                            {['개막식', '무대 프로그램'].map((tab) => (
                                <div
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    style={{
                                        fontSize: 20,
                                        fontWeight: activeTab === tab ? 800 : 400,
                                        color: activeTab === tab ? textColor : 'rgba(255,255,255,0.6)',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    {tab}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ==========================================
                    [오른쪽] 콘텐츠 영역
                ========================================== */}
                    <div style={{ flex: 1 }}>

                        {/* ---------------- 1. 개막식 콘텐츠 ---------------- */}
                        {activeTab === '개막식' && (
                            <div style={{ animation: 'fadeIn 0.5s ease' }}>
                                <div style={{ fontSize: 28, fontWeight: 800, color: titleColor, marginBottom: 30 }}>
                                    개막식 (Opening Ceremony)
                                </div>

                                {/* 정보 테이블 */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 15, color: textColor, marginBottom: 50 }}>
                                    {[
                                        { label: '기간', value: '2026. 03. 31. 화요일' },
                                        { label: '시간', value: '18:00 - 19:00' },
                                        { label: '장소', value: '제주시 새별오름 일원' },
                                        { label: '주요내용', value: '제20회 한국후계농업경영인 전국대회의 시작을 알리는 공식 행사로, 식전공연을\n시작으로 개회 선언, 환영 인사 및 개막 퍼포먼스가 진행됩니다.' },
                                        { label: '주최·주관', value: '(사)한국후계농업경영인중앙연합회' },
                                    ].map((item, idx) => (
                                        <div key={idx} style={{ display: 'flex', fontSize: 16 }}>
                                            <div style={{ width: 100, fontWeight: 800, flexShrink: 0 }}>{item.label}</div>
                                            <div style={{ flex: 1, whiteSpace: 'pre-line', lineHeight: 1.5 }}>{item.value}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* 식전 공연 안내 */}
                                <div style={{ fontSize: 24, fontWeight: 800, color: titleColor, marginBottom: 20 }}>
                                    식전 공연 안내
                                </div>

                                {/* 카드 리스트 */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                                    gap: 20
                                }}>
                                    {[
                                        { title: '난타', img: '/pc/sub1.jpg' },
                                        { title: '제주 농요', img: '/pc/sub1.jpg' },
                                        { title: '팝페라', img: '/pc/sub1.jpg' }
                                    ].map((card, idx) => (
                                        <div key={idx} style={{
                                            backgroundColor: 'white',
                                            borderRadius: '16px',
                                            overflow: 'hidden',
                                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                                        }}>
                                            <div style={{
                                                height: 160,
                                                backgroundImage: `url(${card.img})`, // 실제 이미지 경로로 수정하세요
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }} />
                                            <div style={{
                                                padding: '20px 0',
                                                textAlign: 'center',
                                                fontSize: 18,
                                                fontWeight: 800,
                                                color: 'black'
                                            }}>
                                                {card.title}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* ---------------- 2. 무대 프로그램 콘텐츠 ---------------- */}
                        {activeTab === '무대 프로그램' && (
                            <div style={{ animation: 'fadeIn 0.5s ease' }}>
                                {/* 상단 텍스트 */}
                                <div style={{ textAlign: 'center', color: textColor, marginBottom: 60 }}>
                                    <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 10 }}>
                                        제주도를 방문한 회원 및 가족, 관광객을 위한
                                    </div>
                                    <div style={{ fontSize: 32, fontWeight: 900, color: titleColor, marginBottom: 15 }}>
                                        특별한 프로그램
                                    </div>
                                    <div style={{ fontSize: 16 }}>
                                        회원과 관광객이 함께하는 <span style={{ fontWeight: 800, color: highlightColor }}>수준 높은 환영의 밤</span> 진행!!
                                    </div>
                                </div>

                                {/* 타임라인 영역 */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 50 }}>

                                    {/* 1일차 */}
                                    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 30 }}>
                                        <div style={{ width: 80, fontSize: 24, fontWeight: 800, color: highlightColor, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                                            1일차 <span style={{ display: isMobile ? 'none' : 'inline-block', width: 10, height: 10, borderRadius: '50%', backgroundColor: highlightColor, border: '3px solid #8bc34a', marginTop: 8 }}/>
                                        </div>
                                        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: 15 }}>
                                            {['손빈아', '우연이', '조항조', '설하윤'].map((artist, idx) => (
                                                <div key={idx} style={{ textAlign: 'center' }}>
                                                    <div style={{
                                                        width: '100%', paddingBottom: '120%',
                                                        backgroundColor: '#f0f0f0', borderRadius: '16px', marginBottom: 10,
                                                        backgroundImage: 'url(/pc/sub1.jpg)', // 실제 아티스트 이미지 경로로 수정
                                                        backgroundSize: 'cover', backgroundPosition: 'center'
                                                    }} />
                                                    <div style={{ color: textColor, fontWeight: 600, fontSize: 16 }}>{artist}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* 2일차 */}
                                    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 30 }}>
                                        <div style={{ width: 80, fontSize: 24, fontWeight: 800, color: highlightColor, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                                            2일차 <span style={{ display: isMobile ? 'none' : 'inline-block', width: 10, height: 10, borderRadius: '50%', backgroundColor: highlightColor, border: '3px solid #8bc34a', marginTop: 8 }}/>
                                        </div>
                                        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: 15 }}>
                                            {/* 2일차 아티스트 (디자인 시안상 흐릿하게 처리됨) */}
                                            {[1, 2, 3].map((_, idx) => (
                                                <div key={idx} style={{ textAlign: 'center', opacity: 0.5 }}>
                                                    <div style={{
                                                        width: '100%', paddingBottom: '120%',
                                                        backgroundColor: '#2A6256', borderRadius: '16px', marginBottom: 10
                                                    }} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}
                    </div>

                </div>


            </div>
        </div>
    </div>
}