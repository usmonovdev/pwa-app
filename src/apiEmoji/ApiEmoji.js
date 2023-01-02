// import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
const ACCESS_KEY = "e4e8c1eddab35e74a281f6506f4437beea763f7b"

function ApiEmoji() {
    // const [query, setQuery] = useState("")
    const [result, setResult] = useState({})
    console.log(result);
    const search = async () => {
        const response = await fetch(`https://emoji-api.com/emojis?access_key=${ACCESS_KEY}`);
        const data = await response.json()
        setResult(data)
        console.log(data);
    }
    useEffect(() => {
        search()
    }, [])
    return (
        <div>
            {/* <input type="text" className='search' placeholder='Search...' onChange={e => setQuery(e.target.value)} /> */}
            <button onClick={search}>Search</button>
            <ul className="list">
                {result.map((emoji, id) => {
                    return (
                        <div key={id} className="box">
                            <h1>{emoji.character}</h1>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default ApiEmoji