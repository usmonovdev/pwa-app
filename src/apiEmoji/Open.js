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
        <div className="cardBox">
            <div className='card'>
                <div className="top">
                    <FaTimes className='close' onClick={close} />
                    <HiOutlineClipboardCopy className='copy' onClick={() => copy()} />
                </div>
                <div className='infoBox'>
                    <h1 className='emoji' onClick={() => copy()}>{newEmoji.emoji}</h1>
                    <div className="info">
                        <h1>#{newEmoji.codepoints}</h1>
                        <h1><span>Name: </span>{newEmoji.name}</h1>
                        <h1><span>Category: </span>{newEmoji.group}</h1>
                        <h1><span>Group: </span>{newEmoji.sub_group}</h1>
                    </div>
                </div>
                <ToastContainer position="bottom-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        </div>
    )
}

export default Open