import React from 'react';

type onClickFuncType = () => void

type TilePropsType = {
    className?: string
    value: string
    onClick: onClickFuncType
}

function Tile({value, className, onClick}: TilePropsType) {
    return (
        <div className={`tile ${className}`} onClick={onClick}>
            {value}
        </div>
    );
}

export default Tile;