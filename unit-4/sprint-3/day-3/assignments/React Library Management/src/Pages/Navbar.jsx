import React from 'react'

export default function Navbar() {

    return (
        <div className="navbar" style={{display:'flex',justifyContent:'space-evenly'}}>
            <h4 className="mythology">Mythology</h4>
            <h4 className="mystery">Mystery</h4>
            <h4 className="history">History</h4>
            <h4 className="technology">Technology</h4>
        </div>
    )
}
