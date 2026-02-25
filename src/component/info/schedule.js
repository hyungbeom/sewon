import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Schedule() {
    // 768px 이하 모바일 화면 감지
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    // 현재 선택된 탭 상태 (기본값: 1일차)
    const [activeTab, setActiveTab] = useState(1);

    // ==========================================
    // 💻 PC 버전 화면
    // ==========================================
    if (!isMobile) {
        return (
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <img src="/info3.png" style={{ width: '100%', maxWidth: 1400, display: 'block' }} alt="행사 일정 안내" />
            </div>
        );
    }

    // ==========================================
    // 📱 모바일 버전 화면
    // ==========================================
    return (
        <div style={{
            width: '100%',
            padding: '20px 20px 80px', // 좌우 여백 및 하단 여백 확보
            boxSizing: 'border-box',
            letterSpacing: '-0.5px'
        }}>

            {/* 1. 상단 회색 안내 박스 */}
            <div style={{
                backgroundColor: '#F5F5F5', // 연한 회색 배경
                borderRadius: '16px',
                padding: '24px',
                marginBottom: '30px'
            }}>
                <div style={{ marginBottom: '16px' }}>
                    <div style={{ fontSize: '16px', fontWeight: 900, color: '#111', marginBottom: '4px' }}>행사기간</div>
                    <div style={{ fontSize: '15px', color: '#333' }}>2026년 3월 31일 ~ 2026년 4월 02일</div>
                </div>
                <div>
                    <div style={{ fontSize: '16px', fontWeight: 900, color: '#111', marginBottom: '4px' }}>부대프로그램</div>
                    <div style={{ fontSize: '15px', color: '#333' }}>4월 01일 까지 진행</div>
                </div>
            </div>

            {/* 2. 탭 버튼 영역 (1일차, 2일차, 3일차) */}
            <div style={{
                display: 'flex',
                gap: '10px', // 버튼 사이 간격
                marginBottom: '30px'
            }}>
                {/* 1일차 버튼 */}
                <div
                    onClick={() => setActiveTab(1)}
                    style={{
                        flex: 1, // 3등분으로 꽉 차게
                        textAlign: 'center',
                        padding: '12px 0',
                        borderRadius: '30px',
                        fontSize: '15px',
                        fontWeight: 800,
                        color: 'white',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        // 선택되면 시안의 초록색 그라데이션, 아니면 회색
                        background: activeTab === 1 ? 'linear-gradient(to right, #C6DD59, #8DC141)' : '#C4C4C4'
                    }}
                >
                    1일차
                </div>

                {/* 2일차 버튼 */}
                <div
                    onClick={() => setActiveTab(2)}
                    style={{
                        flex: 1,
                        textAlign: 'center',
                        padding: '12px 0',
                        borderRadius: '30px',
                        fontSize: '15px',
                        fontWeight: 800,
                        color: 'white',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        // 선택되면 시안의 노랑/주황색 그라데이션, 아니면 회색
                        background: activeTab === 2 ? 'linear-gradient(to right, #F9CD48, #F3A936)' : '#C4C4C4'
                    }}
                >
                    2일차
                </div>

                {/* 3일차 버튼 */}
                <div
                    onClick={() => setActiveTab(3)}
                    style={{
                        flex: 1,
                        textAlign: 'center',
                        padding: '12px 0',
                        borderRadius: '30px',
                        fontSize: '15px',
                        fontWeight: 800,
                        color: 'white',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        // 선택되면 시안의 파란색 그라데이션, 아니면 회색
                        background: activeTab === 3 ? 'linear-gradient(to right, #5AB1F5, #90EDF6)' : '#C4C4C4'
                    }}
                >
                    3일차
                </div>
            </div>

            {/* 3. 일정표 카드 (이미지 삽입 영역) */}
            <div style={{ width: '100%', animation: 'fadeIn 0.3s ease-in-out', marginTop : 50 }}>
                {activeTab === 1 && (
                    // ★ 1일차 모바일 카드 이미지를 넣으시면 됩니다!
                    <img src="/info4.png" style={{ width: '100%', display: 'block' }} alt="1일차 일정" />
                )}

                {activeTab === 2 && (
                    // ★ 2일차 모바일 카드 이미지를 넣으시면 됩니다!
                    <img src="/info5.png" style={{ width: '100%', display: 'block' }} alt="2일차 일정" />
                )}

                {activeTab === 3 && (
                    // ★ 3일차 모바일 카드 이미지를 넣으시면 됩니다!
                    <img src="/info6.png" style={{ width: '100%', display: 'block' }} alt="3일차 일정" />
                )}
            </div>

            {/* 탭 전환 시 부드러운 애니메이션 */}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(5px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}