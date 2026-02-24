import { useMediaQuery } from "react-responsive";

export default function Overview() {
    // 768px 이하 모바일 화면 감지
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    // 시안에서 추출한 주요 컬러
    const titleColor = 'rgba(111, 186, 44, 1)'; // 쨍한 연두/초록색
    const darkText = '#111111';   // 짙은 검정 (라벨용)
    const grayText = '#777777';   // 회색 (설명용)

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            // 모바일과 PC의 상하 패딩 여백 차등 적용
            padding: isMobile ? '50px 0px 80px' : '100px 0px 0px',

            letterSpacing: '-0.5px'
        }}>

            {/* 메인 컨테이너 (최대 너비 고정) */}
            <div style={{
                width: '100%',
                maxWidth: 1500,
                display: 'flex',
                // ★ 핵심: 모바일은 세로(column), PC는 가로(row) 배치
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: isMobile ? 'center' : 'flex-start',
                gap: isMobile ? 40 : 120
            }}>

                {/* ==========================================
                    [왼쪽/상단] 포스터 이미지 영역
                ========================================== */}
                <div style={{
                    width: isMobile ? '100%' : '38%', // PC에서는 전체 너비의 38% 차지 (오른쪽 텍스트 영역이 더 넓게)
                    flexShrink: 0
                }}>
                    <img
                        src="/info2.png" // ★ 실제 포스터 이미지 경로로 수정해 주세요!
                        alt="제20회 한국후계농업경영인 전국대회 포스터"
                        style={{
                            width: '100%',
                            display: 'block',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)', // 포스터 은은한 그림자
                            borderRadius: '4px' // 이미지가 약간 부드러워 보이도록 미세한 라운드
                        }}
                    />
                </div>

                {/* ==========================================
                    [오른쪽/하단] 텍스트 정보 영역
                ========================================== */}
                <div style={{
                    flex: 1, // 남은 공간 모두 차지
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%'
                }}>

                    {/* 1. 타이틀 (모바일/PC 줄바꿈 다르게 적용) */}
                    <div style={{
                        fontSize: isMobile ? 32 : 44,
                        fontWeight: 900,
                        color: titleColor,
                        lineHeight: 1.2,
                        marginBottom: 15,
                        wordBreak: 'keep-all'
                    }}>
                        {isMobile ? (
                            // 모바일: 시안처럼 3줄로 분리
                            <>
                                “제20회<br/>
                                한국후계농업경영인<br/>
                                전국대회”
                            </>
                        ) : (
                            // PC: 시안처럼 1줄로 길게
                            "“제20회 한국후계농업경영인 전국대회”"
                        )}
                    </div>

                    {/* 2. 서브타이틀 및 구분선 */}
                    <div style={{
                        fontSize: isMobile ? 20 : 32,
                        color: grayText,
                        fontWeight: 500,
                        marginBottom: isMobile ? 30 : 40,
                        paddingBottom: isMobile ? 20 : 30,
                        borderBottom: '1px solid #EAEAEA' // 시안에 있는 얇은 회색 선
                    }}>
                        다함께 미래로, 빛나는 한농연
                    </div>

                    {/* 3. 상세 정보 리스트 */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

                        {/* 3-1. 행사기간 */}
                        <div style={{ display: 'flex', gap: 20 }}>
                            <div style={{ width: 100, fontSize: 20, fontWeight: 800, color: darkText, flexShrink: 0, paddingTop : 8 }}>행사기간</div>
                            <div style={{ fontSize: 20, color: grayText }}>2026.03.31(화) ~ 04.02.(목)</div>
                        </div>

                        {/* 3-2. 장소 */}
                        <div style={{ display: 'flex', gap: 20 }}>
                            <div style={{ width: 100, fontSize: 20, fontWeight: 800, color: darkText, flexShrink: 0 , paddingTop : 8}}>장소</div>
                            <div style={{ fontSize: 20, color: grayText }}>제주특별자치도 제주시 새별오름 일원</div>
                        </div>

                        {/* 3-3. 목적 (문단 분리) */}
                        <div style={{ display: 'flex', gap: 20 }}>
                            <div style={{ width: 100, fontSize: 20, fontWeight: 800, color: darkText, flexShrink: 0, paddingTop : 8 }}>목적</div>
                            <div style={{ flex: 1, fontSize: 20, color: grayText,  wordBreak: 'keep-all' }}>
                                <div style={{ marginBottom: 12, fontSize: 20 }}>
                                    한국후계농업경영인 회원 및 가족들의 결속과 단합으로 농업농촌 발전 주도
                                </div>
                                <div style={{ marginBottom: 12 }}>
                                    국내 농업의 중요성과 위기에 대한 대국민적인 공감대 형성 기회 마련
                                </div>
                                <div>
                                    농어촌산업 육성 관련 중앙·지방 공무원, 전문가, 기업인, 지역 리더가 참여하여 정보교환 및 벤치마킹이 가능한 교류의 장 마련
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}