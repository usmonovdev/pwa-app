import React from 'react'

function EmojiList({ data }) {
    const copy = (text) => {
        navigator.clipboard.writeText(text)
    }
    return (
        <>
            {data.map((item, id) => (
                <div key={id} className="box">
                    <h1 onClick={copy()}>{item.symbol}</h1>
                </div>
            ))}
        </>
    )
}

export default EmojiList