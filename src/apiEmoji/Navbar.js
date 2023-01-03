import React from 'react'
import { useState } from 'react';
import ResultEmoji from './ResultEmoji';

function Navbar() {
    const [search, setSearch] = useState("")
    const Emoji = require("emoji-api");
    const smile = Emoji.all()
    console.log(smile.filter(emoji => emoji.name.toLocaleLowerCase().includes(search)));
    const query = () => {
        return smile.filter(emoji => emoji.name.toLocaleLowerCase().includes(search))
    }
    return (
        <>
            <div className='inputBox'>
                <input type="text" placeholder='Search Emojies...' onChange={e => setSearch(e.target.value.toLowerCase())} />
            </div>
            <div className='list'>
                <ResultEmoji result={query(smile)} />
            </div>
        </>
    )
}

export default Navbar