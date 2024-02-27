import React from 'react';
import {GameState} from "./TicTacToe";

type onResetFuncType = () => void

type ResetPropsType = {
    gameState: GameState
    onReset: onResetFuncType
}

function Reset({gameState, onReset}: ResetPropsType) {
    if(gameState === GameState.IN_PROGRESS) {
        return <></>;
    }
    return (
        <button onClick={onReset} className="reset-button">Reset</button>
    );
}

export default Reset;