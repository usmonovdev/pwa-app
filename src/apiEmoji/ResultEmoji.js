import React, { useEffect } from 'react'
import { useState } from 'react'
import Open from "./Open"
import { HiOutlineChevronUp } from "react-icons/hi"

function ResultEmoji({ result }) {

    const [isOpen, setIsOpen] = useState(false)
    const [newEmoji, setNewEmoji] = useState([])
    const [scrollBtn, setScrollBtn] = useState(false)
    const [offset, setOffset] = useState(0);

    const openEmoji = (data) => {
        setNewEmoji(data)
        setIsOpen(true)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrollBtn(true)
            } else {
                setScrollBtn(false)
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
            {scrollBtn ? <HiOutlineChevronUp className='up' onClick={scrollToTop} /> : ""}
        </>
    )
}

export default ResultEmoji