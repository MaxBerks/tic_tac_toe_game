import React, {useState} from 'react';
import Board from "./Board";

export enum PlayerTurn {
    PLAYER_X = 'X',
    PLAYER_O = 'O',
}

function TicTacToe() {
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn] = useState(PlayerTurn.PLAYER_X)

    const handleTileClick = (index: number) => {
        if(tiles[index] !== null) return;

        const newTiles = [...tiles];
        newTiles[index] = playerTurn;
        setTiles(newTiles);
        setPlayerTurn((playerTurn === PlayerTurn.PLAYER_X) ? PlayerTurn.PLAYER_O : PlayerTurn.PLAYER_X);
    }

    return (
        <div>
            <h1>Tic Tact Toe</h1>
            <Board playerTurn={playerTurn} tiles={tiles} onTileClick={handleTileClick}/>
        </div>
    );
}

export default TicTacToe;