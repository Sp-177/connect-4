import chipred from '../images/ChipRed.png';
import chipyellow from '../images/ChipYellow.png';
const Slot=({ch,y,x})=>{
    return(
       <div className="slot" x={x} y={y}>
        {ch &&(<img className="token" src={ch==='X'?chipred:chipyellow } width='100%' height='100%' alt='token'/>)}
       </div>

    )
}
export default Slot;