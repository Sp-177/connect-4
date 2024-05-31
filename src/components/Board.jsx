import Slot from "./Slot";
import { useState } from "react";

const Board = () => {
    const [board, SetBoard] = useState([
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '']
    ]);
    const [currP, setCurrP] = useState('X');
    
    const [game, setGame] = useState(false);

    const checkWin = (row, column, ch, board) => {
        let count = 0;
        // console.log(board[row][column]);

        // Vertical check
        for (let i = row; i < 6; i++) {
            if (board[i][column] === ch) { count++; }
            else { break; }
        }
        if (count >= 4) { return true; }

        // Reset count and check diagonals
        count = 0;
        for (let i = row, j = column; i < 6 && j >= 0; i++, j--) {
            if (board[i][j] === ch) { count++; } else { break; }
        }
        if (count >= 4) { return true; }

        count = 0;
        for (let i = row, j = column; i < 6 && j < 7; i++, j++) {
            if (board[i][j] === ch) { count++; } else { break; }
        }
        if (count >= 4) { return true; }

        // Horizontal check
        count = 0;
        for (let i = column; i < 7; i++) {
            if (board[row][i] === ch) { count++; } else { break; }
        }
        for (let i = column; i >= 0; i--) {
            if (board[row][i] === ch) { count++; } else { break; }
        }
        if (count >= 5) { return true; }

        return false;
    }

    const updateBoard = (row, column, cp) => {
        const newBoard = board.map(arr => arr.slice());
        newBoard[row][column] = cp;
        SetBoard(newBoard);
        return checkWin(row, column, cp, newBoard);
    }

    const handleClick = (e) => {
        const column = parseInt(e.target.getAttribute('x'));
        let row = -1;
        for (let i = 0; i < 6; i++) {
            if (board[i][column] !== '') {
                row = i - 1;
                break;
            }
        }
        if (row === -1) {
            row = 5;
        }

        if (row >= 0 && board[row][column] === '') {
            const isWin = updateBoard(row, column, currP);
            if (isWin) {
                setGame(true);
            } else {
                setCurrP(prev => prev === 'X' ? 'O' : 'X');
                
            }
        }
    }

    return (
        <>
            <div id="inst">
                {game === false ?
                    <h2 id="playerDisplay" className={currP === 'X' ? "move1 head" : "move2 head"}>
                        {currP === 'X' ? "Red Move " : "Yellow Move"}
                    </h2> :
                    <h2 id="playerDisplay" className={currP === 'X' ? "move1 head" : "move2 head"}>
                        {currP === 'X' ? "Red Wins " : "Yellow Wins "} &#127881;
                    </h2>}
            </div>
            <div id="board" onClick={game === true ? null : handleClick}>
                {board.map((row, i) => {
                    return row.map((ch, j) => {
                        return <Slot key={`${i}-${j}`} ch={ch} y={i} x={j} />;
                    });
                })}
            </div>
        </>
    );
}

export default Board;
