import React from 'react';
import { useState } from "react";


export function MainNav(){

    const [nav, setNav] = useState({
        count:0
    })

    const updateCount = () => {
        setNav(prevNav => {
            return {count:prevNav.count + 1}
        })
    }

    return (
        <nav>
            <button onClick={updateCount}>change</button>
            <br></br>
            <a>{nav.count}</a>
        </nav>
    )
}


