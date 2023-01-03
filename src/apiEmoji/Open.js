import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { HiOutlineClipboardCopy } from 'react-icons/hi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Open({ newEmoji, close }) {

    const copy = () => {
        navigator.clipboard.writeText(newEmoji.emoji)
        toast.success(`${newEmoji.emoji} Copied To Clipboard!`);
    }

    return (
        <div className='card'>
            <h1>{newEmoji.codepoints}</h1>
            <h1>{newEmoji.emoji}</h1>
            <h1>{newEmoji.name}</h1>
            <h1>{newEmoji.group}</h1>
            <h1>{newEmoji.sub_group}</h1>
            <HiOutlineClipboardCopy onClick={() => copy()} />
            <FaTimes onClick={close} />
            <ToastContainer position="bottom-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
        </div>
    )
}

export default Open