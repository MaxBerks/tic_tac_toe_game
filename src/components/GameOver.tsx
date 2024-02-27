import {GameState} from "./TicTacToe";

type GameOverPropsType = {
    gameState: GameState
}

function GameOver({gameState}: GameOverPropsType) {
    switch(gameState) {
        case GameState.IN_PROGRESS:
            return <></>;
        case GameState.PLAYER_X_WINS:
            return <div className="game-over">X wins</div>;
        case GameState.PLAYER_O_WINS:
            return <div className="game-over">O wins</div>;
        case GameState.DRAW:
            return <div className="game-over">Draw</div>;
        default:
            return <></>;
    }
}

export default GameOver;