import React from 'react'
import { useState } from 'react';

function ApiEmoji() {
    const [search, setSearch] = useState("")
    // const keys = ["sub_group", "name", "group", "emoji", "codepoints"]
    const Emoji = require("emoji-api");
    const smile = Emoji.all()
    console.log(smile.filter(emoji => emoji.name.toLocaleLowerCase().includes(search)));
    return (
        <>
            <div className='inputBox'>
                <input type="text" placeholder='Search Emojies...' onChange={e => setSearch(e.target.value.toLowerCase())} />
            </div>
            <div className='list'>
                {smile.filter(emoji => emoji.name.toLocaleLowerCase().includes(search)).map((emoji, id) => {
                    return (
                        <div key={id} className="box">
                            <h1>{emoji._data.emoji}</h1>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ApiEmoji