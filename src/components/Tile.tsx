import React from 'react';
import {PlayerTurn} from "./TicTacToe";
import {hover} from "@testing-library/user-event/dist/hover";

type onClickFuncType = () => void

type TilePropsType = {
    className?: string
    value: string
    onClick: onClickFuncType
    playerTurn: PlayerTurn
}

function Tile({value, className, onClick, playerTurn}: TilePropsType) {
    let hoverClass = null;
    if(value == null && playerTurn != null)
        hoverClass = `${playerTurn.toLowerCase()}-hover`
    return (
        <div className={`tile ${className} ${hoverClass}`} onClick={onClick}>
            {value}
        </div>
    );
}

export default Tile;