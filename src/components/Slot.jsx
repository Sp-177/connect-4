import chipred from '../images/ChipRed.png';
import chipyellow from '../images/ChipYellow.png';
const Slot=({ch,y,x})=>{
    return(
       <div className="slot">
        {ch &&(<img className="token" src={ch==='X'?chipred:chipyellow } width='100%' height='100%'/>)}
       </div>

    )
}
export default Slot;