import React from 'react'
import { useState } from 'react';
import ResultEmoji from './ResultEmoji';

function Navbar() {
    const [search, setSearch] = useState("")
    const Emoji = require("emoji-api");
    const smile = Emoji.all()
    const query = () => {
        return smile.filter(emoji => emoji.name.toLocaleLowerCase().includes(search))
    }
    return (
        <>
            <div className='inputBox'>
                <input type="text" id='input' placeholder='Search Emojies...' onChange={e => setSearch(e.target.value.toLowerCase())} />
            </div>
            <ResultEmoji result={query()} />
        </>
    )
}

export default Navbar