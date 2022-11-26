import { useState } from "react"

export default function Modal ({ children, title, root }) {
    
    return (
    <div>
        <div>
            <div>
                <div>{title}</div>
                <div>
                    <button>X</button>
                </div>
            </div>
            <div >
                {children}
            </div>
        </div>
    </div>
    )
}