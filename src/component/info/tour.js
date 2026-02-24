import { useMediaQuery } from "react-responsive";

export default function Tour() {
    // 768px 이하 모바일 화면 감지
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    // 관광 안내 데이터 (이미지 경로만 나중에 실제 파일명으로 수정해 주세요!)
    const tourData = [
        {
            prefix: "제주",
            boldText: "관광지 안내",
            imgSrc: "/info7.png" ,
            link : 'https://www.visitjeju.net/kr'
        },
        {
            prefix: "제주",
            boldText: "전통시장 안내",
            imgSrc: "/info8.png",

            link : 'https://www.visitjeju.net/kr/detail/list?menuId=DOM_000001720000000000&cate1cd=cate0000000003#p1&pageSize=12&sortListType=likecnt&viewType=list&isShowBtag'

        }
    ];

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',

            letterSpacing: '-0.5px'
        }}>

            {/* 회색 배경의 메인 컨테이너 */}
            <div style={{
                backgroundColor: '#F6F6F6', // 연한 회색 배경
                borderRadius: isMobile ? '24px' : '16px', // 모바일에서 모서리가 조금 더 둥근 시안 반영
                padding: isMobile ? '40px 20px' : '60px 50px',
                width: '100%',
                maxWidth: 900, // PC에서 박스가 너무 넓어지지 않도록 고정
                display: 'flex',
                // ★ 핵심: 모바일은 세로 배치, PC는 가로 배치
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? '40px' : '30px',
                boxSizing: 'border-box'
            }}>

                {tourData.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            flex: 1, // PC에서 두 카드가 정확히 5:5 비율을 가지도록 함
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            cursor: 'pointer', // 클릭 가능한 요소임을 표시
                            // 마우스 올렸을 때 살짝 떠오르는 애니메이션 효과 (선택사항)
                            transition: 'transform 0.2s ease',
                        }}
                        onClick={(e) => window.open(item.link, '_blank')}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        {/* 1. 이미지 영역 */}
                        <img
                            src={item.imgSrc}
                            alt={`${item.prefix} ${item.boldText}`}
                            style={{
                                width: '100%',
                                // ★ 핵심 디테일: PC는 세로형(3:4 비율), 모바일은 가로형(4:3 비율)
                                aspectRatio: isMobile ? '4/3' : '3/4',
                                objectFit: 'cover', // 사진 비율이 깨지지 않고 꽉 차게 잘리도록 설정
                                borderRadius: isMobile ? '20px' : '16px',
                                marginBottom: isMobile ? '20px' : '24px',
                                boxShadow: '0 8px 20px rgba(0,0,0,0.08)' // 은은한 그림자
                            }}
                        />

                        {/* 2. 텍스트 및 화살표 영역 */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px', // 글씨와 화살표 사이 간격
                            color: '#111111',
                            fontSize: isMobile ? '22px' : '24px'
                        }}>
                            {/* 텍스트 (일반 굵기 + 아주 굵게) */}
                            <div>
                                <span style={{ fontWeight: 500 }}>{item.prefix} </span>
                                <span style={{ fontWeight: 900 }}>{item.boldText}</span>
                            </div>

                            {/* 화살표 아이콘 (SVG로 그려서 깨짐 방지) */}
                            <svg
                                width={isMobile ? "18" : "20"}
                                height={isMobile ? "18" : "20"}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}