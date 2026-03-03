import { useMediaQuery } from "react-responsive";

const EMAIL = "sw182182@naver.com";
const PHONE = "070. 4814. 0634";

export default function Qna() {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                padding: isMobile ? "40px 20px 80px" : "80px 20px 120px",

                letterSpacing: "-0.5px",
                boxSizing: "border-box",
            }}
        >
            {/* 연한 회색 카드 컨테이너 */}
            <div
                style={{
                    width: "100%",
                    maxWidth: 720,
                    backgroundColor: "#f5f5f5",
                    borderRadius: 16,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                    padding: isMobile ? 32 : 48,
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    alignItems: isMobile ? "stretch" : "center",
                    gap: isMobile ? 28 : 48,
                }}
            >
                {/* 왼쪽: 문의 안내 문구 */}
                <div
                    style={{
                        flex: isMobile ? "none" : 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: 4,
                    }}
                >
                    <div
                        style={{
                            fontSize: isMobile ? 14 : 25,
                            fontWeight: 400,
                            color: "#333333",
                        }}
                    >
                        언제든지
                    </div>
                    <div
                        style={{
                            paddingTop : 5,
                            fontSize: isMobile ? 18 : 28,
                            fontWeight: 700,
                            color: "#333333",
                        }}
                    >
                        이메일로 문의해 주시면,
                    </div>
                    <div
                        style={{
                            fontSize: isMobile ? 14 : 25,
                            fontWeight: 400,
                            color: "#333333",
                        }}
                    >
                        답변드리도록 하겠습니다.
                    </div>
                </div>

                {/* 오른쪽: 연락처 정보 (이메일 / 전화) */}
                <div
                    style={{
                        flex: isMobile ? "none" : 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                        minWidth: 0,
                    }}
                >
                    {/* 이메일 필드 */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            backgroundColor: "#ffffff",
                            borderRadius: 12,
                            padding: "16px 20px",
                            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                        }}
                    >
                        <span
                            style={{
                                fontSize: 20,
                                color: "#555555",
                                lineHeight: 1,
                            }}
                            aria-hidden
                        >
                            ✉️
                        </span>
                        <a
                            href={`mailto:${EMAIL}`}
                            style={{
                                fontSize: isMobile ? 14 : 15,
                                fontWeight: 500,
                                color: "#333333",
                                textDecoration: "none",
                            }}
                        >
                            {EMAIL}
                        </a>
                    </div>

                    {/* 전화번호 필드 */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            backgroundColor: "#ffffff",
                            borderRadius: 12,
                            padding: "16px 20px",
                            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                        }}
                    >
                        <span
                            style={{
                                fontSize: 20,
                                color: "#555555",
                                lineHeight: 1,
                            }}
                            aria-hidden
                        >
                            📞
                        </span>
                        <a
                            href={`tel:${PHONE.replace(/\s/g, "").replace(/\./g, "-")}`}
                            style={{
                                fontSize: isMobile ? 14 : 15,
                                fontWeight: 500,
                                color: "#333333",
                                textDecoration: "none",
                            }}
                        >
                            {PHONE}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
