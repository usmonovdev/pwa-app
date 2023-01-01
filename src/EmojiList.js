import React from 'react'

function EmojiList({ data }) {
    return (
        <>
            {data.map((item, id) => (
                <div key={id} className="box">
                    <h1>{item.symbol}</h1>
                </div>
            ))}
        </>
    )
}

export default EmojiList