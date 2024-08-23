import React from 'react'

export default function Box({ size, word, money, mark, background, size2, color, width, height, color2 }) {
    return (
        <div className='da'>
            <div className='infoo' style={{ width: width, height: height }}>
                <div className='important1' style={{ background: background, color: color }}>
                    {mark}
                </div>
                <div>
                    <p className='myBalance' style={{ color: color2, fontSize: size2 }}>{word}</p>
                    <p style={{ fontSize: size }} className='numbere'>{money}</p>
                </div>
            </div>
        </div>
    )
}
