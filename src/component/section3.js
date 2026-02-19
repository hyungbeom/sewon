import ExpandingCards from "./ExpandingCards";
import {useMediaQuery} from "react-responsive";

export default function Section2() {
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});

    return <div style={{backgroundColor: '#EAEC71'}}>

        <div style={{padding: isMobile ? '80px 16px' : 200}}>

            {!isMobile ? <>
                    <div style={{
                        display: 'flex',
                        gap: 32 // ★ 핵심 1: 두 영역 사이의 간격을 정확히 32px로 띄움
                    }}>
                        {/* 왼쪽 영역: 350px 고정 (화면이 좁아져도 안 찌그러지게 flexShrink: 0 추가) */}
                        <div style={{width: 350, flexShrink: 0}}>
                            <div style={{fontSize: 60, fontWeight: 800, color: '#2A6256'}}>오시는 길</div>

                            <div style={{borderBottom: '1px solid #2A6256'}}/>


                            <div style={{fontSize: 24}}>
                                <div>행사장 위치</div>
                                <div>행사장 행사장 세부 위치</div>
                            </div>

                            <div>자세히 보러가기</div>
                        </div>

                        {/* 오른쪽 영역: 남은 공간을 100% 모두 차지함 */}
                        <div style={{flex: 1}}>
                            <img src="/map.png" width={'110%'} alt=""/>
                        </div>
                    </div>
                </>

                :
                <>
                    <img src="/map2.png" width={'100%'} alt=""/>
                    <div style={{margin: '0px auto', textAlign: 'center', paddingTop: 40}}>
                        <img src="/button.png" width={'60%'} alt=""/>
                    </div>
                </>
            }


        </div>

    </div>
}