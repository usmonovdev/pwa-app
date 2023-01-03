import React from 'react'
import { useState } from 'react'
import Open from "./Open"

function ResultEmoji({ result }) {

    const [isOpen, setIsOpen] = useState(false)
    const [newEmoji, setNewEmoji] = useState([])

    const openEmoji = (data) => {
        setNewEmoji(data)
        setIsOpen(true)
    }

    return (
        <>
            <div className='list'>
                {result.map((emoji) => {
                    return (
                        <div key={emoji._data.codepoints} className='box' onClick={() => openEmoji(emoji._data)}>
                            <h1>{emoji._data.emoji}</h1>
                        </div>
                    )
                })}
            </div>
            {isOpen ? <Open newEmoji={newEmoji} close={() => setIsOpen(false)} /> : ""}
        </>
    )
}

export default ResultEmoji