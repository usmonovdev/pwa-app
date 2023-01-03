import React from 'react'

function ResultEmoji({ result }) {
    return (
        <>
        {result.map((emoji, id) => {
            return (
                <div key={id} className='box'>
                    <h1>{emoji._data.emoji}</h1>
                </div>
            )
        })}
        </>
    )
}

export default ResultEmoji