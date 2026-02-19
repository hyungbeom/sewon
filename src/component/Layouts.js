import {Link, Outlet, useLocation} from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import HeaderMO from "./header_mo";
import {useMediaQuery} from "react-responsive";

export default function Layouts() {
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});
    // ★ 핵심: 현재 브라우저의 주소 정보를 가져옵니다.
    const location = useLocation();
    const primaryColor = '#317E71'; // 상단 '행사 안내' 초록색
    return (
        <div>
            {location.pathname === "/" ? (
                <div style={{
                    paddingTop: 125,
                    paddingBottom: isMobile ? 30 : 0,
                    backgroundImage: 'url(/background.png)',
                    backgroundPosition: 'center top',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-end'
                }}>
                    {isMobile ? <HeaderMO  back={false}/> : <Header back={false}/>}
                    <img
                        src={isMobile ? '/mo/main.png' : '/pc/main.png'}
                        width={isMobile ? '90%' : '65%'}
                        alt=""
                    />
                </div>
            ) : (
                // ★ 메인 페이지가 아닌 서브 페이지(/about 등)일 때는 배경 없이 헤더만 딱 보여줍니다!
                <>
                    {isMobile ? <HeaderMO/> : <Header/>}
                </>
            )}
            <div style={{
                paddingTop: isMobile  ? 60 : 100,
                backgroundImage: 'linear-gradient(to right, #317E71 0%, #2A6256 21%, #214D43 37%, #1B3E37 53%, #193A33 66%)',
                // ★ 추가된 부분: 내부 요소를 가로 중앙으로 정렬합니다.
                display: 'flex',
                justifyContent: 'center'
            }}>
                <img src={isMobile ? "/mo/subTitle.png" : "/pc/subTitle.png"}   width={isMobile ? 250 : 700} style={{ paddingTop: isMobile ? 30 : 20 }} alt=""/>


            </div>
            {/* 1. 상단 타이틀 영역 (세로선 + 텍스트) */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: isMobile ? 30 : 50 }}>
                {/* 얇은 세로선 */}
                <div style={{ width: 2, height: isMobile ? 30 : 40, backgroundColor: primaryColor, opacity: 0.5, marginBottom: 15 }} />
                <div style={{ fontSize: isMobile ? 24 : 60, color: primaryColor, fontWeight: 300 }}>
                    행사 안내
                </div>
            </div>
            {/* 이 Outlet 자리에 url에 맞는 컴포넌트(Home, About 등)가 쏙쏙 들어옵니다 */}
            <main style={{padding: location.pathname === "/" ? 0 : isMobile ? ('0px 16px 100px 16px') : ('0px 200px')}}>
                <Outlet/>
            </main>

            {/* 공통 푸터 */}
            <Footer/>
        </div>
    );
}