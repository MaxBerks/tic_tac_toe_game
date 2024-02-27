import React from 'react';

type StrikePropsType = {
    strikeClass: string
}

function Strike({strikeClass}: StrikePropsType) {
    return (
        <div className={`strike ${strikeClass}`}></div>
    );
}

export default Strike;