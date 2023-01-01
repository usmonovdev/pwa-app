import React from 'react'
import { useState } from 'react'
import { Emoji } from './emoji'
import EmojiList from './EmojiList'

function App() {
  const [query, setQuery] = useState("")
  const keys = ["title", "symbol", "keywords"]

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    )
  };

  return (
    <div>
      <input type="text" className='search' placeholder='Search...' onChange={e => setQuery(e.target.value)} />
      <ul className="list">
        <EmojiList data={search(Emoji)} />
      </ul>
    </div>
  )
}

export default App