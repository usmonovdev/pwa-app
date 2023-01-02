import React from 'react'
import emoji from 'emoji-api'

function ApiEmoji() {
    const emoji = require("emoji-api");
    const setSmile = emoji.all()
    console.log(setSmile)
    return (
        <div className='list'>
            {setSmile.map((emoji, id) => {
                return (
                    <div key={id} className="box">
                        <h1>{emoji._data.emoji}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default ApiEmoji