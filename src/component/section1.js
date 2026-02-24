import ExpandingCards from "./ExpandingCards";
import {useMediaQuery} from "react-responsive";

export default function Section1() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return <div >

        <div style={{padding: isMobile ? '80px 16px' : 200}}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{fontSize:isMobile ? 32 : 60, fontFamily: "'GmarketSans', sans-serif", fontWeight: 500, lineHeight : 1.3 }}>다함께 미래로!  {isMobile ? <br/> : <></>} <span style={{fontWeight: 700}}>빛나는 한농연</span>
                </div>
                <img src="/mark.svg" alt="" style={{marginRight:isMobile ? 0 : -50, marginTop: isMobile? 0 : -100}} width={isMobile ? 83 : 'auto'} />
            </div>

            <div style={{ width: 60, height: 2, background: '#F39800', marginTop: 30, marginBottom: isMobile ? 40 :  73 }} />

            <ExpandingCards/>
        </div>
    </div>
}