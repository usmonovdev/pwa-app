import React from 'react'

function EmojiList({ data }) {
  return (
    <table>
        <tbody>
            <tr>
                <th>Emoji</th>
                <th>Name</th>
            </tr>
            {data.map((item, id) => (
                <tr key={id}>
                    <th>{item.symbol}</th>
                    <th>{item.title}</th>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default EmojiList