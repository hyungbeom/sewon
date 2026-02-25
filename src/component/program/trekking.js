import { useMediaQuery } from "react-responsive";

export default function Trekking() {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    const titleColor = "#245943";
    const grayBg = "#F7F8F9";
    const borderColor = "#E0E0E0";
    const darkText = "#111111";
    const grayText = "#444444";

    const description = [
        "새별오름의 아름다운 풍경을 따라 걸으며 행운까지 만나볼 수 있는 특별한 트레킹 프로그램입니다.",
        "참가자는 트레킹 코스 중간에 마련된 복권 배부 장소에서 복권을 수령하고, 도착지에 도착하면 즉석에서 복권을 긁어 다양한 경품 당첨 여부를 확인할 수 있습니다.",
        "걷는 즐거움과 설레는 행운이 함께하는 참여형 이벤트로, 회원 여러분의 많은 참여 바랍니다."
    ];

    const scheduleLines = [
        "트레킹 자율 참여 → 코스 중간 복권 배부 장소에서 복권 수령 →",
        "도착점 도착 후 즉석 복권(스크래치) 확인 →",
        "당첨 시 운영본부에서 상품 수령"
    ];

    const detailData = [
        { label: "일정", value: scheduleLines.join("\n") },
        { label: "참여 인원", value: "총 600명 - 1부 300명 / 2부 300명" },
        {
            label: "운영 시간",
            value: "1부: 10:00 ~ 12:00\n2부: 14:00 ~ 16:00"
        },
        {
            label: "상품 안내",
            value: "지역상품권 50만원권: 2명\n지역상품권 10만원권: 10명\n지역특산품(예: 귤 1봉지 등) 다수 제공"
        }
    ];

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                padding: isMobile ? "40px 0px 80px" : "80px 0px 120px",
                letterSpacing: "-0.5px"
            }}
        >
            <div style={{ width: "100%", maxWidth: 1400 }}>
                {/* 1. 메인 타이틀 + 밑줄 */}
                <div style={{ marginBottom: isMobile ? 20 : 28 }}>
                    <div
                        style={{
                            fontSize: isMobile ? 26 : 40,
                            fontWeight: 900,
                            color: "#224C48",
                            marginBottom: isMobile ? 10 : 14
                        }}
                    >
                        트레킹 프로그램
                    </div>
                    <div
                        style={{
                            width: "100%",
                            height: 2,
                            backgroundColor: borderColor
                        }}
                    />
                </div>

                {/* 2. 회색 박스: 서브타이틀 + 설명 + 일정/참여인원/운영시간/상품안내 + 유의사항 */}
                <div
                    style={{
                        backgroundColor: grayBg,
                        borderRadius: "24px",
                        padding: isMobile ? "24px 20px" : "36px 48px",
                        marginBottom: isMobile ? 20 : 28
                    }}
                >
                    {/* 서브 타이틀 */}
                    <div
                        style={{
                            fontSize: isMobile ? 18 : 32,
                            fontWeight: 400,
                            color: '#224C48',
                            marginBottom: isMobile ? 16 : 20
                        }}
                    >
                        행운을 따라 걷는 <span style={{fontWeight : 800}}>새별오름 트레킹</span>
                    </div>

                    {/* 설명 문단 */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            // gap: 14,
                            marginBottom: 0,
                            fontSize: isMobile ? 15 : 20,
                            lineHeight: 1.65,
                            color: '#224C48',
                        }}
                    >
                        {description.map((paragraph, idx) => (
                            <div key={idx}>{paragraph}</div>
                        ))}
                    </div>

                    {/* 설명과 일정 사이 경계선 */}
                    <div
                        style={{
                            width: "100%",
                            height: 1,
                            backgroundColor: borderColor,
                            marginTop: isMobile ? 24 : 64,
                            marginBottom: isMobile ? 24 : 64
                        }}
                    />

                    {/* 일정·참여인원·운영시간·상품 안내 */}
                    <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 18 : 22 }}>
                        {detailData.map((item, idx) => (
                            <div key={idx} style={{ display: "flex", gap: 40, alignItems: "flex-start" }}>
                                <div
                                    style={{
                                        width: isMobile ? 80 : 150,
                                        flexShrink: 0,
                                        fontWeight: 800,
                                        color: titleColor,
                                        fontSize: isMobile ? 14 : 32
                                    }}
                                >
                                    {item.label}
                                </div>
                                <div
                                    style={{
                                        flex: 1,
                                        color: darkText,
                                        fontWeight: 500,
                                        fontSize: isMobile ? 14 : 30,
                                        lineHeight: 1.6,
                                        whiteSpace: "pre-line"
                                    }}
                                >
                                    {item.value}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 유의사항 (빨간 글씨, 박스 안 하단) */}
                    <div
                        style={{
                            marginTop: isMobile ? 20 : 100,
                            marginBottom: 0,
                            fontSize: isMobile ? 14 : 32,
                            color: "#C62828",
                            fontWeight: 600,
                            textAlign : 'center'
                        }}
                    >
                        ※ 복권 당첨 상품은 운영본부에서 수령하실 수 있습니다.
                    </div>
                </div>

                {/* 6. 지도 이미지 영역 */}
                <div
                    style={{
                        width: "100%",
                        backgroundColor: "#EBEBEB",
                        borderRadius: "24px",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <img
                        src={isMobile ? "/info12_mo.png" : "/info12.png"}
                        alt="새별오름 트레킹 코스 및 복권 배부 장소 안내"
                        style={{ width: "100%", height: "auto", display: "block" }}
                    />
                </div>
            </div>
        </div>
    );
}
