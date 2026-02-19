import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Faq() {
    // 768px 이하 모바일 화면 감지
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    // 열려있는 FAQ 항목의 ID를 저장하는 상태 (null이면 모두 닫힘)
    // 시안처럼 2번째 항목이 기본으로 열려있게 하려면 useState(1)로 설정합니다.
    const [openId, setOpenId] = useState(null);

    // 시안에서 추출한 주요 컬러
    const darkText = '#111111';
    const grayText = '#333333';
    const borderColor = '#EAEAEA'; // 기본 회색 선
    const activeBorderColor = '#F39C12'; // 열렸을 때 주황색 선
    const activeIconColor = '#C0392B'; // 열렸을 때 빨간색 X 마크

    // FAQ 데이터 (원하시는 질문/답변으로 채워주세요)
    const faqData = [
        {
            id: 0,
            question: '[물품 반입 안내] 반입 불가한 품목은 무엇인가요?',
            answer: '위험물, 맹견, 대형 텐트 등 행사 진행에 방해가 될 수 있는 물품은 반입이 엄격히 금지됩니다. 자세한 사항은 공지사항을 참조해 주시기 바랍니다.'
        },
        {
            id: 1,
            question: '[물품 반입 안내] 물품 검색이 있나요?',
            answer: '안전하고 원활한 행사 진행을 위해 공연장 입장 전 보안검색을 진행합니다.\n반입금지 물품이 적발될 경우 주최/주관사에서는 별도 보관해드리지 않습니다. 직접 폐기하시거나 개인이 별도로 보관하셔야 합니다.'
        },
        {
            id: 2,
            question: '[사진 및 영상 촬영 안내] 사진이나 영상 촬영이 허용 되나요?',
            answer: '개인 소장용 사진 촬영은 가능하나, 상업적 목적의 촬영이나 플래시를 과도하게 사용하는 촬영은 다른 관람객에게 피해를 줄 수 있으므로 자제 부탁드립니다.'
        },
        {
            id: 3,
            question: '[사진진 및 영상 촬영 안내] 현장에서 찍힌 제 사진이 추후에 사용될 수 있나요?',
            answer: '행사 기록 및 홍보 목적으로 주최 측에서 촬영한 스케치 영상이나 사진에 관람객의 모습이 포함될 수 있으며, 이는 추후 공식 홍보물에 사용될 수 있습니다.'
        },
        {
            id: 4,
            question: '편의 시설 및 기타안내] 푸드존 부스 이용 시 결제는 어떻게 하면 되나요?',
            answer: '현금 및 신용카드, 모바일 간편결제(삼성페이, 카카오페이 등) 모두 사용 가능합니다. 단, 일부 부스에서는 현금 결제만 가능할 수 있으니 참고 바랍니다.'
        }
    ];

    // 항목 클릭 시 열고 닫는 함수
    const toggleFaq = (id) => {
        if (openId === id) {
            setOpenId(null); // 이미 열린 걸 누르면 닫음
        } else {
            setOpenId(id); // 다른 걸 누르면 그걸 엶
        }
    };

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            padding: isMobile ? '40px 0px 80px' : '80px 0px 120px',
            fontFamily: "'Pretendard', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif",
            letterSpacing: '-0.5px'
        }}>

            {/* 메인 컨테이너 (최대 너비 1000px 고정) */}
            <div style={{ width: '100%', maxWidth: 1000 }}>

                {/* 리스트 전체 상단 선 */}
                <div style={{ borderTop: `1px solid ${borderColor}` }}>

                    {faqData.map((item) => {
                        const isOpen = openId === item.id;

                        return (
                            <div key={item.id} style={{ borderBottom: `1px solid ${borderColor}` }}>

                                {/* 1. 질문 영역 (클릭 가능) */}
                                <div
                                    onClick={() => toggleFaq(item.id)}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: isMobile ? '25px 0' : '30px 10px', // 모바일은 좌우 여백을 줄임
                                        cursor: 'pointer',
                                        // 모바일은 제목 글씨가 상대적으로 크고 꽉 차게 디자인됨
                                        fontSize: isMobile ? 18 : 17,
                                        fontWeight: isMobile ? 800 : 500,
                                        color: darkText
                                    }}
                                >
                                    <div style={{ flex: 1, paddingRight: 20, lineHeight: 1.4, wordBreak: 'keep-all' }}>
                                        {item.question}
                                    </div>

                                    {/* 우측 아이콘 (+ 또는 X) */}
                                    <div style={{
                                        fontSize: isMobile ? 28 : 24, // 모바일 아이콘 큼직하게
                                        fontWeight: 300,
                                        color: isOpen ? activeIconColor : darkText,
                                        // X 아이콘일 때 시안처럼 살짝 우측에 딱 붙도록 위치 미세 조정
                                        transform: isOpen ? 'translateY(-2px)' : 'none',
                                        transition: 'all 0.2s ease',
                                        // 텍스트 드래그 방지
                                        userSelect: 'none'
                                    }}>
                                        {isOpen ? '✕' : '+'}
                                    </div>
                                </div>

                                {/* 2. 답변 영역 (열렸을 때만 보임) */}
                                {isOpen && (
                                    <div style={{
                                        // ★ 디테일: 열렸을 때 상단에 얇은 주황색 선 표시
                                        borderTop: `1px solid ${activeBorderColor}`,
                                        padding: isMobile ? '25px 0 35px' : '30px 10px 40px',
                                        fontSize: isMobile ? 15 : 16,
                                        color: grayText,
                                        lineHeight: 1.6,
                                        whiteSpace: 'pre-line', // \n 줄바꿈 인식
                                        backgroundColor: '#FAFAFA', // 답변 부분은 아주 연한 회색으로 살짝 눌러줌 (선택사항, 가독성 향상)
                                        animation: 'slideDown 0.3s ease-out'
                                    }}>
                                        {/* PC 시안 3번째 이미지를 보면 답변 우측 끝에 X 표시가 또 있는데,
                                            이는 상단 탭의 X 표시와 위치가 동일한 것입니다.
                                            질문 옆의 X를 누르면 닫히므로 기능상 답변 내용에만 집중하도록 했습니다. */}
                                        {item.answer}
                                    </div>
                                )}

                            </div>
                        );
                    })}
                </div>

            </div>

            {/* 스르륵 열리는 애니메이션 CSS */}
            <style>{`
                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}