import React, { useState } from "react";
import Square from './Square';


const Board = () => {
    const [xIsNext, setXIsNext] = useState(true);
    const [values, setValues] = useState(Array(9).fill(null));
    function handleClick(id) {
        if (values[id] !== null || calculateWinner(values)) return;
        const newVals = values.slice();
        if (xIsNext) {
            newVals[id] = "X";
        } else {
            newVals[id] = "O";
        }
        setValues(newVals);
        setXIsNext(!xIsNext);
    }

    const winner = calculateWinner(values);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={values[0]} fnOnClick={() => handleClick(0)} />
                <Square value={values[1]} fnOnClick={() => handleClick(1)} />
                <Square value={values[2]} fnOnClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={values[3]} fnOnClick={() => handleClick(3)} />
                <Square value={values[4]} fnOnClick={() => handleClick(4)} />
                <Square value={values[5]} fnOnClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={values[6]} fnOnClick={() => handleClick(6)} />
                <Square value={values[7]} fnOnClick={() => handleClick(7)} />
                <Square value={values[8]} fnOnClick={() => handleClick(8)} />
            </div>
        </>
    );
}


export default Board;

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
