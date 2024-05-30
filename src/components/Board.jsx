import Slot from "./Slot";

import { useState } from "react";
const Board=()=>{
    const [board,SetBoard]=useState([
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','','']
    ]);
    const [currP,setCurrP]=useState('X');
    const [oppP,setoppP]=useState('O');
    const [game,setGame]=useState(false);
    // const handelclick
    return(
        <>
        
        <div id="inst">{game==false?<h2 id="playerDisplay" className={currP==='X'?"move1 head":"move2 head"} >{currP==='X'?"Red Move" : "Yellow Move"}</h2>:
        <h2 id="playerDisplay" className={oppP==='X'?"move1 head":"move2 head"} >{oppP==='X'?"Red Wins" : "Yellow Move"}</h2>}</div>
        <div id="board">
        {board.map((row,i)=>{
             return row.map((ch,j)=>{
                return <Slot ch={ch} y={i} x={j}/>
             })
        })}
        </div>

        </>

    )
}

export default Board;