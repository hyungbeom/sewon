import ExpandingCards from "./ExpandingCards";
import {useMediaQuery} from "react-responsive";

export default function Section1() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return <div >

        <div style={{padding: isMobile ? '80px 16px' : 200}}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{fontSize:isMobile ? 32 : 60, fontWeight: 400}}>다함께 미래로!  {isMobile ? <br/> : <></>} <span style={{fontWeight: 700}}>빛나는 한농연</span>
                </div>
                <img src="/mark.svg" alt="" style={{marginRight:isMobile ? 0 : -50, marginTop: isMobile? 0 : -100}} width={isMobile ? 83 : 'auto'} />
            </div>

            <div style={{ width: 60, height: 2, background: 'linear-gradient(90deg, rgb(243, 152, 0) 26%, rgb(244, 161, 10) 45%, rgb(248, 186, 37) 76%, rgb(253, 210, 63) 100%)', marginTop: 40, marginBottom: 80 }} />

            <ExpandingCards/>
        </div>
    </div>
}